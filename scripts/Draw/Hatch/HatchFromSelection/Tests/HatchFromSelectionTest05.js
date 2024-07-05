// Auto generated by Testing Dashboard
// File        : scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest05.js
// Timestamp   : 2015-11-24 14:30:33
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function HatchFromSelectionTest05() {
    TdbTest.call(this, 'scripts/Draw/Hatch/HatchFromSelection/Tests/HatchFromSelectionTest05.js');
}

HatchFromSelectionTest05.prototype = new TdbTest();

HatchFromSelectionTest05.prototype.test00 = function() {
    qDebug('running HatchFromSelectionTest05.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Hatch/HatchFromSelection/Tests/data/hatch_block_polyline.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::SelectToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::SelectAllButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::SelectToolsPanel::BackButton');
    this.dlgStart();
    this.dlgAppendCode('var map = new Map()');
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Type', 'HatchPattern')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Pattern', 'ANSI31')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Scale', '1.0')");
    this.dlgAppendCode("map.put('DialogOpenedByTdb/Angle', '0.0')");
    this.dlgAppendCode("WidgetFactory.restoreState(dialog, 'DialogOpenedByTdb', undefined, false, undefined, map)");
    this.dlgEnd();
    this.clickOnWidget('MainWindow::MainToolsPanel::HatchToolsPanelButton');
    this.clickOnWidget('MainWindow::HatchToolsPanel::HatchFromSelectionButton');
    this.setZoom(10.248366013071895, new RVector(-20.5077, -13.4356, 0, true));
    var p = new RVector(75.052934, 24.559311);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('HatchFromSelectionTest05_000.dxf');
    this.tearDown();
    qDebug('finished HatchFromSelectionTest05.test00()');
};

