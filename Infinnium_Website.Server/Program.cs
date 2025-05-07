using System.Text;
using Infinnium_Website.Server;
using Infinnium_Website.Server.Interfaces;
using Infinnium_Website.Server.Models.Config;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using Serilog;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddControllers();

// Add login credentials
builder.Services.Configure<LoginConfig>(builder.Configuration.GetSection("EmailLoginCredentials"));
builder.Services.AddSingleton<LoginConfig>();

// Add Encryption Settings
builder.Services.Configure<EncryptionSettings>(builder.Configuration.GetSection("EncryptionKey"));
builder.Services.AddSingleton<EncryptionHelper>();

// Add JWT token blacklist service
builder.Services.AddSingleton<ITokenBlacklistService, JwtTokenBlacklistService>();

// Configure JWT Settings
var jwtSettings = new JwtSettings();
builder.Configuration.GetSection("JwtSettings").Bind(jwtSettings);
builder.Services.AddSingleton(jwtSettings);

// Configure JWT Authentication
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
.AddJwtBearer(options =>
{
    options.TokenValidationParameters = new TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidateAudience = true,
        ValidateLifetime = true,
        ValidateIssuerSigningKey = true,
        ValidIssuer = jwtSettings.Issuer,
        ValidAudience = jwtSettings.Audience,
        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings.SecretKey))
    };
});
builder.Services.AddAuthorization();

// Injecting EmailService
builder.Services.AddTransient<IEmailSenderService, EmailSender>();

// Add Logging Services
Log.Logger = new LoggerConfiguration()
    .WriteTo.Console()
    .WriteTo.File("Logs/app-log-.txt", rollingInterval: RollingInterval.Day, shared: true)
    .Enrich.FromLogContext()
    .CreateLogger();
builder.Host.UseSerilog();

// Add CORS
//var corsSettings = new CorsSettings();
//builder.Configuration.GetSection("CorsSettings").Bind(corsSettings);

builder.Services.AddCors(options =>
    options.AddPolicy("AllowAllOrigins", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader()
    )
);

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add connection string
builder.Services.Configure<DatabaseSettings>(builder.Configuration.GetSection("DatabaseSettings"));
builder.Services.AddSingleton<DatabaseSettings>(sp => sp.GetRequiredService<IOptions<DatabaseSettings>>().Value);
builder.Services.AddSingleton<ConnectionStringService>();

var app = builder.Build();

// Example logging
Log.Information("Application starting up");

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS
app.UseCors("AllowAllOrigins");

app.UseHttpsRedirection();
app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.MapFallbackToFile("/index.html");

app.Run();

Log.CloseAndFlush();