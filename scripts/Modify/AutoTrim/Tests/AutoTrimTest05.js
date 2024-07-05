// Auto generated by Testing Dashboard
// File        : scripts/Modify/AutoTrim/Tests/AutoTrimTest05.js
// Timestamp   : 2015-11-09 16:03:56
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function AutoTrimTest05() {
    TdbTest.call(this, 'scripts/Modify/AutoTrim/Tests/AutoTrimTest05.js');
}

AutoTrimTest05.prototype = new TdbTest();

AutoTrimTest05.prototype.test00 = function() {
    qDebug('running AutoTrimTest05.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/AutoTrim/Tests/data/splines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::AutoTrimButton');
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(27.761832, 45.766582);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(26.479945, 41.023597);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(25.710812, 37.690689);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(24.813491, 28.461097);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(24.941679, 19.487883);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(7.800995024875622, new RVector(17.4888, 3.32972, 0, true));
    var p = new RVector(23.147037, 5.899872);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(43.016297, 24.871811);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(42.118975, 24.359056);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('AutoTrimTest05_000.dxf');
    this.tearDown();
    qDebug('finished AutoTrimTest05.test00()');
};

