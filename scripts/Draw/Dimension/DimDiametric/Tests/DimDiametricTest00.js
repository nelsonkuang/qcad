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
// File        : scripts/Draw/Dimension/DimDiametric/Tests/DimDiametricTest00.js
// Timestamp   : 2011-04-27 11:57:24
// Description : 

include('scripts/Developer/TestingDashboard/TdbTest.js');

function DimDiametricTest00() {
    TdbTest.call(this, 'scripts/Draw/Dimension/DimDiametric/Tests/DimDiametricTest00.js');
}

DimDiametricTest00.prototype = new TdbTest();

DimDiametricTest00.prototype.test00 = function() {
    qDebug('running DimDiametricTest00.test00()...');
    this.setUp();
    this.importFile('scripts/Draw/Dimension/Tests/drawing02.dxf');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::MainToolsPanel::DimensionToolsPanelButton');
    TdbTest.clickOnWidget('MainWindow::CadToolBar::DimensionToolsPanel::DimDiametricButton');
    this.setToolOption('Dimension/Prefix', '(No prefix)');
    this.setToolOption('Dimension/Text', '');
    this.setToolOption('Dimension/UpperTolerance', '');
    this.setToolOption('Dimension/LowerTolerance', '');
    this.updateToolOptions();
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(24.514388, 14.476619);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(24.8, 11.5);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('Dimension/Prefix', '(No prefix)');
    this.setToolOption('Dimension/Text', '');
    this.setToolOption('Dimension/UpperTolerance', '');
    this.setToolOption('Dimension/LowerTolerance', '');
    this.updateToolOptions();
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(21.007194, 30.483813);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(26.402878, 27.156475);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(34.766187, 16.72482);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setZoom(11.120000000000001, new RVector(6.96043, 3.14928, 0) );
    var p = new RVector(30.089928, 20.052158);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.verifyDrawing('DimDiametricTest00_000.dxf');
    this.tearDown();
    qDebug('finished DimDiametricTest00.test00()');
};

