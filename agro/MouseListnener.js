#pragma strict
import System.Collections.Generic;

var AgroList : Array;

function Start () {
	AgroList = new Array();
}

function AddObject (item : AgroDector) {
	AgroList.Add(item);
}

function Update () {

	if (Input.GetMouseButton(0)) {
		var dest : Vector3 = Camera.main.ScreenToWorldPoint(Input.mousePosition);
		dest.z = 0;
print("do someting!"+AgroList.length);
		for(var i=0; i < AgroList.length;i++ ){
			var ad : AgroDector = AgroList[i];
			ad.PositionOfTarget(dest);
		}
	} 

}