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
// File        : scripts/Draw/Line/LineVertical/Tests/LineVerticalTest00.js
// Timestamp   : 2011-02-28 13:35:55
// Description : 6 lines, length of 10 / 20, different reference points

include('scripts/Developer/TestingDashboard/TdbTest.js');

function LineVerticalTest00() {
    TdbTest.call(this, 'scripts/Draw/Line/LineVertical/Tests/LineVerticalTest00.js');
}

LineVerticalTest00.prototype = new TdbTest();

LineVerticalTest00.prototype.test00 = function() {
    qDebug('running LineVerticalTest00.test00()...');
    this.setUp();
    this.clickOnWidget('MainWindow::MainToolsPanel::LineToolsPanelButton');
    this.clickOnWidget('MainWindow::LineToolsPanel::LineVerticalButton');
    this.setToolOption('LineHorizontal/Length',  [ 10, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '0');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(0, 9.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(0, 9.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('LineHorizontal/Length',  [ 10, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '1');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(10.1, 9.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(10.1, 9.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('LineHorizontal/Length',  [ 10, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '2');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(19.9, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(19.9, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('LineHorizontal/Length',  [ 20, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '0');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(29.8, 9.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(29.8, 9.9);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    this.setToolOption('LineHorizontal/Length',  [ 20, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '1');
    this.updateToolOptions();
    this.setZoom(10, new RVector(5, 5, 0) );
    var p = new RVector(39.9, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(39.9, 10.1);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(41.9, 11.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.MidButton, 4, 0);
    var p = new RVector(41.9, 11.7);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.MidButton, 0, 0);
    this.setToolOption('LineHorizontal/Length',  [ 20, 0 ] );
    this.setToolOption('LineHorizontal/ReferencePoint', '2');
    this.updateToolOptions();
    this.setZoom(10, new RVector(-2.6, 4.6, 0) );
    var p = new RVector(50, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.LeftButton, 1, 0);
    var p = new RVector(50, 10);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.LeftButton, 0, 0);
    var p = new RVector(29.9, 10.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonRelease, p, Qt.RightButton, 0, 0);
    var p = new RVector(29.9, 10.8);
    this.sendMouseEventModelPos(QEvent.MouseButtonPress, p, Qt.RightButton, 2, 0);
    this.verifyDrawing('LineVerticalTest00_000.dxf');
    this.tearDown();
    qDebug('finished LineVerticalTest00.test00()');
};

