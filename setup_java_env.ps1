# PowerShell script to set up Java environment variables
# Run this script as Administrator after installing Java JDK

Write-Host "Setting up Java environment variables..." -ForegroundColor Green

# Common Java installation paths
$possiblePaths = @(
    "C:\Program Files\Eclipse Adoptium\jdk-17*",
    "C:\Program Files\Java\jdk-17*",
    "C:\Program Files\OpenJDK\jdk-17*",
    "C:\Program Files\Amazon Corretto\jdk17*"
)

$javaHome = $null

# Find Java installation
foreach ($path in $possiblePaths) {
    $found = Get-ChildItem $path -ErrorAction SilentlyContinue | Sort-Object Name -Descending | Select-Object -First 1
    if ($found) {
        $javaHome = $found.FullName
        Write-Host "Found Java installation at: $javaHome" -ForegroundColor Yellow
        break
    }
}

if (-not $javaHome) {
    Write-Host "Java JDK not found in common locations. Please install Java JDK 17 first." -ForegroundColor Red
    Write-Host "Download from: https://adoptium.net/temurin/releases/?version=17" -ForegroundColor Cyan
    exit 1
}

# Set JAVA_HOME
Write-Host "Setting JAVA_HOME to: $javaHome" -ForegroundColor Yellow
[Environment]::SetEnvironmentVariable("JAVA_HOME", $javaHome, "Machine")

# Add Java to PATH
$javaBin = Join-Path $javaHome "bin"
$currentPath = [Environment]::GetEnvironmentVariable("PATH", "Machine")
if ($currentPath -notlike "*$javaBin*") {
    Write-Host "Adding Java to PATH: $javaBin" -ForegroundColor Yellow
    [Environment]::SetEnvironmentVariable("PATH", "$currentPath;$javaBin", "Machine")
}

Write-Host "Environment variables set successfully!" -ForegroundColor Green
Write-Host "Please restart your terminal/IDE for changes to take effect." -ForegroundColor Cyan
Write-Host ""
Write-Host "To verify installation, run:" -ForegroundColor White
Write-Host "  java -version" -ForegroundColor Gray
Write-Host "  echo `$env:JAVA_HOME" -ForegroundColor Gray

