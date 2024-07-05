/**
 * Copyright (c) 2011-2013 by Andrew Mustun. All rights reserved.
 * 
 * This file is part of the QCAD project.
 *
 * QCAD is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * QCAD is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with QCAD.
 */
// Auto generated by Testing Dashboard
// File        : scripts/Modify/Round/Tests/RoundTest00.js
// Timestamp   : 2011-08-08 16:10:04
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function RoundTest00() {
    TdbTest.call(this, 'scripts/Modify/Round/Tests/RoundTest00.js');
}

RoundTest00.prototype = new TdbTest();

RoundTest00.prototype.test00 = function() {
    qDebug('running RoundTest00.test00()...');
    this.setUp();
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonPress, new QPoint(49, 428), Qt.LeftButton, 1, 0);
    var w = objectFromPath('MainWindow::CadToolBar::MainToolsPanel');
    this.sendMouseEvent(w, QEvent.MouseButtonRelease, new QPoint(49, 428), Qt.LeftButton, 0, 0);
    this.importFile('scripts/Modify/Round/Tests/data/lines.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::ModifyToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::ModifyToolsPanel::RoundProButton');
    this.setToolOption('RoundPro/Trim', 'true');
    this.setToolOption('RoundPro/Radius',  [ 5, 0 ] );
    this.setToolOption('RoundPro/PolylineMode', 'false');
    this.updateToolOptions();
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(0.083333, 27.916667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(1.916667, 29.5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('RoundPro/Trim', 'false');
    this.setToolOption('RoundPro/Radius',  [ 5, 0 ] );
    this.setToolOption('RoundPro/PolylineMode', 'false');
    this.updateToolOptions();
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(36.416667, 29.583333);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(39.666667, 26.166667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(39.833333, 22.166667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(37.916667, 20.416667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('RoundPro/Trim', 'true');
    this.setToolOption('RoundPro/Radius',  [ 5, 0 ] );
    this.setToolOption('RoundPro/PolylineMode', 'false');
    this.updateToolOptions();
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(21.416667, 19.916667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(19.833333, 18.916667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(21.25, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(19.666667, 10.5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(27.833333, 9.75);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(30.583333, 9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(38.416667, 1.333333);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(37.083333, 0.333333);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(4.583333, 0.166667);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(12, new RVector(1.08333, 2.91667, 0) );
    var p = new RVector(0.083333, 2.833333);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(32.166667, 15.75);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    this.verifyDrawing('RoundTest00_000.dxf');
    this.tearDown();
    qDebug('finished RoundTest00.test00()');
};

