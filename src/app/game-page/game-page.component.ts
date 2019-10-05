import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

interface IPuzzleTile {

  selectedTileIndex: number;
  puzzleLocation: number;
  isSelected: boolean;
}

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  imageWidth = 400;
  imageHeight = 300;
  rows = 3;
  cols = 3;

  tileWidth = 0;
  tileHeight = 0;

  puzzleTiles: IPuzzleTile[] = [];

  selectedTiles: IPuzzleTile[] = [];
  totalPieces = this.rows * this.cols;

  path = 'https://www.gstatic.com/webp/gallery/2.jpg';

  ngOnInit() {

    console.log('Rows: ' + this.rows);
    console.log('Column: ' + this.cols);

    this.tileWidth = this.imageWidth / this.cols;
    this.tileHeight = this.imageHeight / this.rows;

    for (let x = 0; x < this.totalPieces; x++)  {
        const puzzleTile = { selectedTileIndex: 0, puzzleLocation: x, isSelected: false };
        this.selectedTiles[x] = puzzleTile;
    }

    for (let i = 0; i < this.totalPieces; i++) {
        const puzzleTile = { selectedTileIndex: 0, puzzleLocation: i, isSelected: false };
        this.puzzleTiles[i] = puzzleTile;
    }

  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  getPuzzleTileStyle(tile: IPuzzleTile) {

    // tslint:disable-next-line:radix
    const leftPosition = (tile.selectedTileIndex % this.cols) *  this.tileWidth;
    const topPositionIndex = Math.floor((tile.selectedTileIndex  / this.cols ));
    const topPosition = topPositionIndex *  this.tileHeight;
    const imagePathFinal = tile.isSelected ? this.path : '';

    return {
      backgroundPosition: (-leftPosition) + 'px ' + (-topPosition) + 'px',
      backgroundImage: 'url(' + imagePathFinal + ')',
      backgroundSize: this.imageWidth + 'px ' + this.imageHeight + 'px',
    };
  }

  getBottomTilesStyle(index) {
    // tslint:disable-next-line:radix
    const leftPosition = (index % this.cols) *  this.tileWidth;
    const topPositionIndex = Math.floor((index  / this.cols ));
    const topPosition = topPositionIndex *  this.tileHeight;

    return {
      backgroundPosition: (-leftPosition) + 'px ' + (-topPosition) + 'px',
      backgroundImage: 'url(' + this.path + ')',
      backgroundSize: this.imageWidth + 'px ' + this.imageHeight + 'px',
    };
  }

  getImageSize() {
    return {
      width: (this.imageWidth) + 'px',
      height: (this.imageHeight) + 'px'
    };
  }

  getTileSize() {
    return {
      width: (this.tileWidth) + 'px',
      height: (this.tileHeight) + 'px'
    };
  }

  getWidthHeightRatio() {
    const ratioValue = (this.tileWidth / this.tileHeight);
    const ratio = ratioValue.toString() + ':1';
    return ratio;
  }

  tileClicked(tile: IPuzzleTile) {
    for (let i = 0; i < this.totalPieces; i++) {
        if (!this.selectedTiles[i].isSelected) {
          this.selectedTiles[i].isSelected = true;
          this.selectedTiles[i].selectedTileIndex = tile.puzzleLocation;
          break;
        }

    }
  }
}
