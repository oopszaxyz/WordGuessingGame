import { Component, OnInit } from '@angular/core';
import { Library } from '../Library';

@Component({
  selector: 'guest-game',
  templateUrl: './guest.component.html',
  styleUrls: ['./guest.component.css'],
})
export class GuestGameComponent implements OnInit {
  start = false;
  ans2 = '';

  question = Library[Math.floor(Math.random() * Library.length)];
  answer1 = Library[Math.floor(Math.random() * Library.length)];
  answer2 = Library[Math.floor(Math.random() * Library.length)];

  checkClick1 = false;
  checkClick2 = false;
  checkClick3 = false;

  butt = [this.question, this.answer1, this.answer2];
  Score = 0;
  constructor() {}

  ngOnInit() {
    this.gamestart();
  }

  gamestart() {
    this.checkNull();
    this.checkChoice();
    this.shuffle();
  }

  setup() {
    this.question = Library[Math.floor(Math.random() * Library.length)];
    this.answer1 = Library[Math.floor(Math.random() * Library.length)];
    this.answer2 = Library[Math.floor(Math.random() * Library.length)];
    this.butt = [this.question, this.answer1, this.answer2];
  }

  shuffle() {
    var j, x, i;
    for (i = this.butt.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = this.butt[i];
      this.butt[i] = this.butt[j];
      this.butt[j] = x;
    }
  }

  checkChoice() {
    while (true) {
      if (this.question.word == this.answer1.word) {
        this.answer1 = Library[Math.floor(Math.random() * Library.length)];
      } else if (this.question.word == this.answer2.word) {
        this.answer2 = Library[Math.floor(Math.random() * Library.length)];
      } else if (
        this.question.word != this.answer1.word &&
        this.question.word != this.answer2.word
      ) {
        break;
      }
    }
  }

  checkNull() {
    while (true) {
      if (
        this.question.word == null ||
        this.question.spell == null ||
        this.question.meaning == null
      ) {
        this.question = Library[Math.floor(Math.random() * Library.length)];
      } else if (
        this.answer1.word == null ||
        this.answer1.spell == null ||
        this.answer1.meaning == null
      ) {
        this.answer1 = Library[Math.floor(Math.random() * Library.length)];
      } else if (
        this.answer2.word == null ||
        this.answer2.spell == null ||
        this.answer2.meaning == null
      ) {
        this.answer2 = Library[Math.floor(Math.random() * Library.length)];
      } else {
        break;
      }
    }
  }

  setCheckClick1() {
    this.checkClick1 = true;
  }
  setCheckClick2() {
    this.checkClick2 = true;
  }
  setCheckClick3() {
    this.checkClick3 = true;
  }

  checkAnswer() {
    if (this.checkClick1) {
      if (this.butt[0].meaning == this.question.meaning) {
        this.Score++;
        this.checkClick1 = false;
        this.setup();
        this.gamestart();
      } else {
        this.Score--;
        this.checkClick1 = false;
      }
    } else if (this.checkClick2) {
      if (this.butt[1].meaning == this.question.meaning) {
        this.Score++;
        this.checkClick2 = false;
        this.setup();
        this.gamestart();
      } else {
        this.Score--;
        this.checkClick2 = false;
      }
    } else if (this.checkClick3) {
      if (this.butt[2].meaning == this.question.meaning) {
        this.Score++;
        this.checkClick3 = false;
        this.setup();
        this.gamestart();
      } else {
        this.Score--;
        this.checkClick3 = false;
      }
    }
  }
}
