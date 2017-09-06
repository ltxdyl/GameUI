/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

module Battle {

	export class UIWndBattle extends fairygui.GComponent {

		public btnSetting:fairygui.GButton;
		public imgCoin:fairygui.GImage;
		public imgEnemy:fairygui.GImage;

		public static URL:string = "ui://txr6nnlp12kkk0";

		public static createInstance():UIWndBattle {
			return <UIWndBattle><any>(fairygui.UIPackage.createObject("Battle","WndBattle"));
		}

		public constructor() {
			super();
		}

		protected constructFromXML(xml: any): void {
			super.constructFromXML(xml);

			this.btnSetting = <fairygui.GButton><any>(this.getChild("btnSetting"));
			this.imgCoin = <fairygui.GImage><any>(this.getChild("imgCoin"));
			this.imgEnemy = <fairygui.GImage><any>(this.getChild("imgEnemy"));
		}
	}
}