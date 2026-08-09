[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null

$pdfPath = 'C:\Users\Jeff Tarroza\.gemini\antigravity\brain\3bda7ec5-41c4-4dce-ae19-37dac0e0353f\.user_uploaded\media__1786246652815.pdf'
$outputDir = 'C:\Users\Jeff Tarroza\.gemini\antigravity\scratch\teacher-portfolio\assets\gallery'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

$file = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath).GetAwaiter().GetResult()
$pdfDoc = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file).GetAwaiter().GetResult()

Write-Host "PDF Pages Count:" $pdfDoc.PageCount

for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
    $page = $pdfDoc.GetPage($i)
    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    $page.RenderToStreamAsync($stream).GetAwaiter().GetResult() | Out-Null

    $targetFileName = "portfolio_page_" + ($i + 1) + ".jpg"
    $targetFile = [Windows.Storage.StorageFile]::GetFileFromPathAsync((Join-Path $outputDir $targetFileName)).GetAwaiter().GetResult()
    # Write stream to file via System.IO
    $reader = New-Object Windows.Storage.Streams.DataReader($stream)
    $reader.LoadAsync($stream.Size).GetAwaiter().GetResult() | Out-Null
    $bytes = New-Object byte[] $stream.Size
    $reader.ReadBytes($bytes)
    [System.IO.File]::WriteAllBytes((Join-Path $outputDir $targetFileName), $bytes)
    $reader.Dispose()
    $stream.Dispose()
    $page.Dispose()
    Write-Host "Successfully rendered page" ($i + 1)
}
