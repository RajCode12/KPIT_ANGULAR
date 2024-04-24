import { Component} from "@angular/core";

@Component({
    selector:"app-teacher",
    templateUrl:"./teacher.component.html",
    styles:`
        .box{
            border: 1px brown solid;
            padding: 10px 10px 10px 10px;
            background-color: green;
        }
        .style2{
            border: 1px black solid;
            padding: 10px 10px 10px 10px;
            background-color: gray;
        }
    `
})
export class TeacherComponent {
    id:number=10
    teacherName:string="Makarand Bhoir"
    teacherAddress:string="Delhi"
    
    clickHandler() {
        this.id=0;
        this.teacherName="";
        this.teacherAddress="";
    }
}