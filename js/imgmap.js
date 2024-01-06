function showPreview(previewId) {
    var preview = document.getElementById(previewId);
    if (preview) {
        preview.style.display = "block";
    }
}

function hidePreview(previewId) {
    var preview = document.getElementById(previewId);
    if (preview) {
        preview.style.display = "none";
    }
}
