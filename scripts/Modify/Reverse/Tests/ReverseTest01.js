// Auto generated by Testing Dashboard
// File        : scripts/Modify/Reverse/Tests/ReverseTest01.js
// Timestamp   : 2022-06-08 15:31:09
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function ReverseTest01() {
    TdbTest.call(this, 'scripts/Modify/Reverse/Tests/ReverseTest01.js');
}

ReverseTest01.prototype = new TdbTest();

ReverseTest01.prototype.test00 = function() {
    qDebug('running ReverseTest01.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/Reverse/Tests/data/polyline01.dxf');
    this.selectAll();
    var w = objectFromPath('MainWindow::CadToolBar::PolylineToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(22, 510), Qt.RightButton, 2, 0);
    var w = objectFromPath('MainWindow::CadToolBar::PolylineToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(24, 509), Qt.RightButton, 0, 0);
    var w = objectFromPath('MainWindow::CadToolBar::PolylineToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(28, 495), Qt.RightButton, 2, 0);
    var w = objectFromPath('MainWindow::CadToolBar::PolylineToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(29, 495), Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::PolylineToolsPanel::BackButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    var w = objectFromPath('MainWindow::CadToolBar::ModifyToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(47, 361), Qt.RightButton, 2, 0);
    var w = objectFromPath('MainWindow::CadToolBar::ModifyToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(47, 360), Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::BackButton');
    this.triggerCommand('rv');
    this.verifyDrawing('ReverseTest01_000.dxf');
    this.tearDown();
    qDebug('finished ReverseTest01.test00()');
};

