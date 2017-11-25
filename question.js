class Question {
  constructor(Content) {
    this.content = Content;
    this.save();
    // Question._All.push(this.question)
  }

  save(){
    this.constructor._All.push(this)
  }

  static All() {
    return this._All;
  }

  static Find(id) {
    console.log(this._All);
    return this._All[id - 1];
  }
}

Question._All = [];
