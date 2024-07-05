// Auto generated by Testing Dashboard
// File        : scripts/Modify/TrimBoth/Tests/TrimBothTest03.js
// Timestamp   : 2015-11-04 16:12:07
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function TrimBothTest03() {
    TdbTest.call(this, 'scripts/Modify/TrimBoth/Tests/TrimBothTest03.js');
}

TrimBothTest03.prototype = new TdbTest();

TrimBothTest03.prototype.test00 = function() {
    qDebug('running TrimBothTest03.test00()...');
    this.setUp();
    this.importFile('scripts/Modify/TrimBoth/Tests/data/closed_polylines.dxf');
    var p = new RVector(14.071813, 15.535763);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(14.071813, 15.357176);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(13.982519, 15.178588);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::TrimBothButton');
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(26.483665, 28.126203);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(26.215783, 21.87563);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(54.343361, 21.071985);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(45.949735, 29.465611);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(25.23355, 8.749427);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(24.429905, 1.338034);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(53.450422, 9.374484);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.198973545293528, new RVector(-7.64265, 4.73395, 0, true));
    var p = new RVector(53.361128, 0.266507);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(37.109639, 16.250115);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(36.752463, 16.250115);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(36.484582, 15.714351);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(36.305994, 15.625057);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('TrimBothTest03_000.dxf');
    this.tearDown();
    qDebug('finished TrimBothTest03.test00()');
};

