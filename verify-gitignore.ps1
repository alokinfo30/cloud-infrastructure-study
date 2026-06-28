# Save this as verify-gitignore.ps1

param(
    [switch]$Fix
)

Write-Host "=========================================" -ForegroundColor Cyan
Write-Host "  .gitignore Security Verification Tool" -ForegroundColor Cyan
Write-Host "=========================================" -ForegroundColor Cyan
Write-Host ""

# Function to check if a file is tracked
function Check-TrackedFiles {
    param($pattern)
    $result = git ls-files | Select-String $pattern
    return $result
}

# Check for sensitive files
$sensitivePatterns = @{
    "Environment files" = "\.env"
    "Terraform state" = "\.tfstate"
    "Private keys" = "\.(pem|key|crt|cer|der|p12|pfx)"
    "Credentials" = "(credentials|secrets|password)"
    "Node modules" = "node_modules"
    "Log files" = "\.log"
    "Lock files" = "package-lock\.json|yarn\.lock"
}

$issuesFound = $false

foreach ($category in $sensitivePatterns.Keys) {
    $pattern = $sensitivePatterns[$category]
    $results = Check-TrackedFiles $pattern
    
    if ($results) {
        Write-Host "❌ $category found in Git:" -ForegroundColor Red
        $results | ForEach-Object { Write-Host "   $_" -ForegroundColor Yellow }
        $issuesFound = $true
    } else {
        Write-Host "✅ $category: OK" -ForegroundColor Green
    }
}

Write-Host ""

if ($issuesFound) {
    Write-Host "⚠️  ISSUES FOUND! Remove these files from Git tracking." -ForegroundColor Red
    
    if ($Fix) {
        Write-Host "🔧 Attempting to fix..." -ForegroundColor Yellow
        
        # Remove common sensitive files
        git rm --cached *.env* 2>$null
        git rm --cached *.tfstate* 2>$null
        git rm --cached *.pem 2>$null
        git rm --cached *.key 2>$null
        git rm -r --cached node_modules 2>$null
        
        Write-Host "✅ Files removed from Git. Please commit and push." -ForegroundColor Green
    }
} else {
    Write-Host "✅ All checks PASSED! No sensitive files in Git." -ForegroundColor Green
}

Write-Host ""
Write-Host "📊 Repository Size:" -ForegroundColor Yellow
git count-objects -v | Select-String "size"

Write-Host ""
Write-Host "📝 Ignored files:" -ForegroundColor Yellow
git ls-files --others --ignored --exclude-standard | Select-Object -First 10

Write-Host ""
Write-Host "✅ Verification complete!" -ForegroundColor Green