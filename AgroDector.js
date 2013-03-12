#pragma strict

//this is a 
var agroRange : int ;
var controllerName : String;


function Start () {
	agroRange = 10;
	controllerName = "mobController";
	addToController();
}

function Update () {

}

function addToController(){
	GameObject.Find(controllerName).GetComponent(MouseListnener).AddObject(this);
}

function PositionOfTarget(target : Vector3){
var dis = Mathf.Sqrt( (target.x - gameObject.transform.position.x)*(target.x - gameObject.transform.position.x) + (target.y - gameObject.transform.position.y)*(target.y - gameObject.transform.position.y) );
	if( agroRange >= dis ){ 
		renderer.material.color = Color.red;
	}else{
		renderer.material.color = Color.green;
	}
}