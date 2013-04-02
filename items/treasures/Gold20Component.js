#pragma strict

class Gold20Component extends TreasureComponent{

	function Gold20Component(){
		super();
	}
	
	function Start(){
		var treasure : GameObject = this.gameObject;
		var renderer = treasure.GetComponent(Renderer);
		renderer.material.color = Color.yellow;
		treasure.transform.localScale = new Vector3(1, 1, 1);
		super();
	}

	function collect(){
		GameObject.Find("Sidekick").GetComponent(inventory).addGold(20);
		super.collect();
	}

}
