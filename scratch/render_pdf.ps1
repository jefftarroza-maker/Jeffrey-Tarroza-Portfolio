[Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.StorageFile, Windows.Storage, ContentType = WindowsRuntime] | Out-Null
[Windows.Storage.Streams.InMemoryRandomAccessStream, Windows.Storage.Streams, ContentType = WindowsRuntime] | Out-Null

$pdfPath = 'C:\Users\Jeff Tarroza\.gemini\antigravity\brain\3bda7ec5-41c4-4dce-ae19-37dac0e0353f\.user_uploaded\media__1786246652815.pdf'
$outputDir = 'C:\Users\Jeff Tarroza\.gemini\antigravity\scratch\teacher-portfolio\assets\gallery'
New-Item -ItemType Directory -Force -Path $outputDir | Out-Null

function Await-Task($asyncOp) {
    while ($asyncOp.Status -eq [Windows.Foundation.AsyncStatus]::Started) {
        Start-Sleep -Milliseconds 50
    }
    return $asyncOp.GetResults()
}

$file = Await-Task ([Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath))
$pdfDoc = Await-Task ([Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file))

Write-Host "PDF Loaded. Total Pages:" $pdfDoc.PageCount

for ($i = 0; $i -lt $pdfDoc.PageCount; $i++) {
    $page = $pdfDoc.GetPage($i)
    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    $renderOp = $page.RenderToStreamAsync($stream)
    Await-Task $renderOp | Out-Null

    $targetPath = Join-Path $outputDir ("portfolio_page_" + ($i + 1) + ".jpg")
    $targetFile = Await-Task ([Windows.Storage.StorageFolder]::GetFolderFromPathAsync($outputDir)).CreateFileAsync("portfolio_page_" + ($i + 1) + ".jpg", [Windows.Storage.CreationCollisionOption]::ReplaceExisting)
    
    $outStream = Await-Task ($targetFile.OpenAsync([Windows.Storage.FileAccessMode]::ReadWrite))
    $copyOp = [Windows.Storage.Streams.RandomAccessStream]::CopyAsync($stream, $outStream)
    Await-Task $copyOp | Out-Null
    $outStream.FlushAsync() | Out-Null
    $outStream.Dispose()
    $stream.Dispose()
    $page.Dispose()
    Write-Host "Saved page" ($i + 1) "to" $targetPath
}
