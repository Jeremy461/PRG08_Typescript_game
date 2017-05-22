class Flying implements CharacterStates {
    
    private character: Character;
    private game: Game;
    private click: EventListener;
    
    constructor(c: Character, g: Game) {
        this.character = c;
        this.game = g;
        this.character.velocityY = -15;
        this.character.velocityX = 10;
        
        let container = document.getElementById("container");
        this.click = () => this.onClick();
        container.addEventListener("click", this.click);
    };
    
    public move(): void{
        this.character.x += this.character.velocityX;
        this.character.y += this.character.velocityY;
        this.character.velocityY += this.character.gravity;
        
        if(this.character.x >= 400){
            this.game.background.move();
            
            this.character.velocityX = 0;
        }
        
        this.character.div.style.transform = "translate("+ this.character.x +"px, "+ this.character.y +"px)";
    };
    
    private onClick(): void{
        console.log("click");
        this.character.velocityY = -15;
    }
}