class Question {
    constructor() {
      this.title = createElement('h2');
      this.question  = createElement('h2');
      this.option1 = createElement('h2');
      this.option2 = createElement('h2');
      this.option3 = createElement('h2');
      this.name = createInput("Name");
      this.guess = createInput("Answer No.");
      this.submit = createButton('Submit');
    }

    hide(){
        this.title.hide();
        this.name.hide();
        this.guess.hide();
        this.submit.hide();
    }

    display(){
        this.title.html("MyQuiz Game");
        this.title.position(350, 0);

        this.question.html("Question:- What is a possible answer to every single question in the world");
        this.question.position(150,80);

        this.option1.html("1: Yes");
        this.option1.position(150, 100);
        this.option2.html("2: No");
        this.option2.position(150,120);
        this.option3.html("3: I don't know");
        this.option3.position(150, 140);

        this.name.position(150, 230);
        this.guess.position(450, 230);
        this.submit.position(450,320);
      
        this.submit.mousePressed(()=>{
            this.title.hide();
            this.name.hide();
            this.guess.hide();
            this.submit.hide();
            contestant.name = this.name.value();
            contestant.answer = this.guess.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);    
        });

    }

}