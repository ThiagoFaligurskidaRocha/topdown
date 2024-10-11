const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.EightDir,
		C3.Behaviors.scrollto,
		C3.Plugins.Keyboard,
		C3.Plugins.Tilemap,
		C3.Behaviors.solid,
		C3.Plugins.Spritefont2,
		C3.Behaviors.EightDir.Cnds.IsMoving,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.Keyboard.Cnds.IsKeyDown,
		C3.Behaviors.EightDir.Acts.SimulateControl,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Cnds.EveryTick,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.System.Acts.GoToLayout
	];
};
self.C3_JsPropNameTable = [
	{direcao: 0},
	{"8Direções": 0},
	{CentrarEm: 0},
	{Sprite: 0},
	{Teclado: 0},
	{Mosaico: 0},
	{Mosaico2: 0},
	{Sólido: 0},
	{colisao: 0},
	{Sprite2: 0},
	{FonteDeSprites: 0}
];

self.InstanceType = {
	Sprite: class extends self.ISpriteInstance {},
	Teclado: class extends self.IInstance {},
	Mosaico: class extends self.ITilemapInstance {},
	Mosaico2: class extends self.ITilemapInstance {},
	colisao: class extends self.ISpriteInstance {},
	Sprite2: class extends self.ISpriteInstance {},
	FonteDeSprites: class extends self.ISpriteFontInstance {}
}