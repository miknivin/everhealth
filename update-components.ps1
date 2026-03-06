# Component Update Script
# This PowerShell script helps update React Router components to Next.js

Write-Host "🔄 Next.js Migration Helper Script" -ForegroundColor Cyan
Write-Host "===================================" -ForegroundColor Cyan
Write-Host ""

$componentsToUpdate = @(
    "src\app\components\ProductList.tsx",
    "src\app\components\LoginRegisterModal.tsx",
    "src\app\pages\ProductPage.tsx",
    "src\app\pages\CartPage.tsx",
    "src\app\pages\BillingAddressPage.tsx",
    "src\app\pages\ProfilePage.tsx",
    "src\app\pages\OurProducts.tsx"
)

Write-Host "Components that need updating:" -ForegroundColor Yellow
foreach ($component in $componentsToUpdate) {
    if (Test-Path $component) {
        Write-Host "  ✓ $component" -ForegroundColor Green
    } else {
        Write-Host "  ✗ $component (not found)" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Quick Reference for Manual Updates:" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Add 'use client'; at the top of each file" -ForegroundColor White
Write-Host ""
Write-Host "2. Replace imports:" -ForegroundColor White
Write-Host "   OLD: import { Link } from 'react-router-dom';" -ForegroundColor Red
Write-Host "   NEW: import Link from 'next/link';" -ForegroundColor Green
Write-Host ""
Write-Host "   OLD: import { useNavigate } from 'react-router-dom';" -ForegroundColor Red
Write-Host "   NEW: import { useRouter } from 'next/navigation';" -ForegroundColor Green
Write-Host ""
Write-Host "   OLD: import { useParams } from 'react-router-dom';" -ForegroundColor Red
Write-Host "   NEW: import { useParams } from 'next/navigation';" -ForegroundColor Green
Write-Host ""
Write-Host "3. Replace hook usage:" -ForegroundColor White
Write-Host "   OLD: const navigate = useNavigate();" -ForegroundColor Red
Write-Host "   NEW: const router = useRouter();" -ForegroundColor Green
Write-Host ""
Write-Host "   OLD: navigate('/path');" -ForegroundColor Red
Write-Host "   NEW: router.push('/path');" -ForegroundColor Green
Write-Host ""
Write-Host "4. Replace Link props:" -ForegroundColor White
Write-Host "   OLD: <Link to='/path'>" -ForegroundColor Red
Write-Host "   NEW: <Link href='/path'>" -ForegroundColor Green
Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Yellow
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
