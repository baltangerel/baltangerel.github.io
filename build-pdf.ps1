# Builds Ben-Altangerel-Portfolio.pdf from portfolio-pdf.html using Microsoft Edge.
# Run from this folder:  powershell -ExecutionPolicy Bypass -File build-pdf.ps1

$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$source = Join-Path $root 'portfolio-pdf.html'
$output = Join-Path $root 'Ben-Altangerel-Portfolio.pdf'

$edge = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe"
) | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw 'Microsoft Edge was not found.' }

$url = 'file:///' + ($source -replace '\\', '/' -replace ' ', '%20')
if (Test-Path $output) { Remove-Item $output }

# virtual-time-budget gives the web font and images time to load before printing
$edgeArgs = @('--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000', "--print-to-pdf=`"$output`"", $url)
$p = Start-Process -FilePath $edge -ArgumentList $edgeArgs -Wait -PassThru -WindowStyle Hidden

if (-not (Test-Path $output)) { throw "PDF was not created (Edge exit code $($p.ExitCode))." }
"Created {0} ({1:N2} MB)" -f (Split-Path $output -Leaf), ((Get-Item $output).Length / 1MB)
