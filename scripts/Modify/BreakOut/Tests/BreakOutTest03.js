// Auto generated by Testing Dashboard
// File        : scripts/Modify/BreakOut/Tests/BreakOutTest03.js
// Timestamp   : 2015-09-02 11:50:28
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function BreakOutTest03() {
    TdbTest.call(this, 'scripts/Modify/BreakOut/Tests/BreakOutTest03.js');
}

BreakOutTest03.prototype = new TdbTest();

BreakOutTest03.prototype.test00 = function() {
    qDebug('running BreakOutTest03.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/BreakOut/Tests/data/polylines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::BreakOutProButton');
    this.setToolOption('BreakOutPro/RemoveSegment', 'true');
    this.setToolOption('BreakOutPro/LineMode', 'false');
    this.updateToolOptions();
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(35.962372, 63.987245);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(35.195153, 57.33801);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(34.427934, 50.177296);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(34.683673, 43.272321);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(27.01148, 37.390306);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(27.522959, 25.370536);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(29.057398, 24.091837);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(30.080357, 14.629464);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(29.057398, -1.737883);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(29.057398, -26.737883);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(3.910224438902743, new RVector(48.176, 36.5185, 0, true));
    var p = new RVector(25.732781, -2.760842);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(36.729592, 12.839286);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('BreakOutTest03_000.dxf');
    this.tearDown();
    qDebug('finished BreakOutTest03.test00()');
};

