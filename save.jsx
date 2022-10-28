var width = 1280;
var height = 720;
var docObj = activeDocument;

activeDocument.resizeImage(width, height);
activeDocument.changeMode(ChangeMode.RGB);
activeDocument.embedColorProfile = false;
activeDocument.RemovePersonalInformation= true;
activeDocument.RemoveDateAndTime = true;
docObj.activeLayer = docObj.layers[1];
docObj.layers[0].visible = true;
docObj.layers[1].visible = false;

var titleArr = docObj.layers[0].layers;
for (i = 0; i < titleArr.length; i++) {
    titleArr[i].visible = false;
    for (j = 0; j < titleArr[i].layers.length; j++) {
        titleArr[i].layers[j].visible = true;
    }
}

docPath = activeDocument.path;
for (i = 0; i < titleArr.length; i++) {
    titleArr[i].visible = true;
    chap = ('00' + (i + 1)).slice(-2);
    var fileObj = new File(docPath + "/" + chap);
    var pngOpt = new PNGSaveOptions();
    pngOpt.interlaced = false;
    activeDocument.saveAs(fileObj, pngOpt, true, Extension.LOWERCASE);
    titleArr[i].visible = false;
}

docObj.layers[0].visible = false;
docObj.layers[1].visible = true;

fileObj = new File(docPath + "/背景");
var pngOpt = new PNGSaveOptions();
pngOpt.interlaced = false;
activeDocument.saveAs(fileObj, pngOpt, true, Extension.LOWERCASE);