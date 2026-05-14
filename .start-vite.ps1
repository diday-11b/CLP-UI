$ErrorActionPreference = "Stop"
[Environment]::SetEnvironmentVariable("PATH", $null, "Process")
$root = "D:\CLP"
$nodeDir = Join-Path $root ".tools\node-v22.11.0-win-x64"
$env:Path = "$nodeDir;$env:Path"
Set-Location $root
& (Join-Path $nodeDir "node.exe") (Join-Path $root "node_modules\vite\bin\vite.js") --host 0.0.0.0 --port 5173
