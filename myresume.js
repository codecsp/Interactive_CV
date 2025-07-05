var w = window.innerWidth;
var h = window.innerHeight;
var bgColor = "#b3e0f2"; 
var game = new Phaser.Game(w,h,Phaser.CANVAS,'canvas',{preload:preload,create:create,update:update,render:render});
var orange = "#FF7519";
var debug=false;
var hero;
var cursors;
var tree1;
var plant1;
var ct1,ct2,ct3,ct4;
var bulletTime = 0;
var ctext,pythontext,javatext,jstext;
var birds;
var bubble;
var style_white = { font:"24px Roboto", fill:"#FFF",align:"center" };
var style_whitee = { font:"20px Roboto", fill:"#FFF",align:"center" };

var style_black = {font:"25px Arial Black"};
var style_roboto = { font:"24px Roboto", fill:"#FFF",align:"center" }
var shakti;
var shakti_cup;
var shakti2;
var football;
var text;
var spoj_url="#";
var hackerearth_url="https://www.hackerearth.com/users/mr.soham143/";
var codechef_url="https://www.codechef.com/users/iamsohampatil";
var github_url="https://github.com/codecsp";
var facebook_url="https://www.facebook.com/soham.patil.33886";
var linkedin_url="https://linkedin.com/in/sohampatilsp/";
var resume_url = "./assets/Soham_Patil_SDE2_4_Yrs.pdf";
var website_url = "http://www.sohampatil.me";
var gmail_url = "sohamspatil30@gmail.com";
var inst_text ;
var bug ;
var bug_tween;
var bug_killed = false;
var cloud_moving1;
var cloud_moving2;
var base5 = 15100;
var base6 = 17500+1400;
var base7 =19500+1400;
var platformLength = base7+2000;
var cupTweenDone=false;
var cupTweenSecondDone=false;
var delay =0;
var starting_point=100;
var back_btn;
var touch;
var direction = "left";
var explosion_count = 0;
var max_explosion_count=9;

function preload()
{
	text = game.add.text(w/2, h/2, "Welcome to webspace \nof \nSoham Patil...!!",{ font:"50px Georgia",align: "center",fill: '#ffffff' });
	text.anchor.setTo(0.5,0.5);

	game.load.image('download','assets/download2.png');
	game.load.image('linu','assets/linu.png');
	game.load.image('git','assets/git.png');
	game.load.image('docker','assets/docker.png');
	game.load.image('aws','assets/aws.png');
	//game.load.image('back','assets/aws.png');



	game.load.image('publication','assets/publication.png');
	game.load.image('ground','assets/ground.png');
	game.load.image('back','assets/back64.png');
	game.load.image('grass','assets/grass.png');
	game.load.image('brick','assets/brick.png');
	game.load.image('tree1','assets/tree-bright-e.png');
	game.load.image('plant1','assets/plant-lotus.png');
	game.load.image('cloud','assets/cloud.png');
	game.load.image('birds','assets/birds.png');
	game.load.image('school','assets/vvhs.png');
	game.load.image('jrcolg','assets/jrcolg.png');
	game.load.image('mainbanner','assets/main.png');
	game.load.image('building','assets/building.png');
	game.load.image('hometown','assets/home.png');
	game.load.image('hill','assets/mountain.png');
	game.load.image('treeS','assets/tree-dark-d.png');
	game.load.atlasJSONHash('soham','assets/hero_running.png','assets/hero_running.json');
	game.load.atlasJSONHash('waterAtlas','assets/water_corrected.png','assets/water_running.json');
	game.load.atlasJSONHash('waterAtlas2','assets/water_orange.png','assets/water_running.json');
	game.load.image('wce','assets/wce.png');
	game.load.image('level','assets/sign.png');
	game.load.image('cocotree','assets/coco.png');
	game.load.image('python','assets/python_white.png');
	game.load.image('css','assets/cssn.png');
	game.load.image('js','assets/js.png');
	game.load.image('html','assets/html5.png');
	game.load.image('flask','assets/flask.png');
	game.load.image('gmap','assets/gmap.png');
	game.load.image('cert','assets/cert.png');
	game.load.image('blankcert','assets/blankcert.png');
	game.load.image('sptree','assets/sptree.png');
	game.load.image('udemy','assets/udemy.svg');
	game.load.image('night','assets/night.jpg');
	game.load.image('android','assets/android.png');
	game.load.image('frog','assets/frog.png');
	//game.load.image('sandiskPd','assets/sandiskPd.png');
	//game.load.image('sandiskLogo','assets/sandiskLogo.png');
	game.load.image('acmlogo','assets/acmlogo.png');
	game.load.image('ccLogo','assets/ccLogo.png');
	game.load.image('cbLogo','assets/cb.png');
	game.load.image('pacelogo','assets/pacelogo.png');
	game.load.image('awslogo','assets/awslogo.png');
	game.load.image('corona','assets/corona.png');	
	game.load.image('cp','assets/cp.png');
	//game.load.image('ai','assets/ai.png');
	game.load.image('covid','assets/covid.png');
	game.load.image('otherprojects','assets/other.png');
	game.load.image('bullet','assets/images.png');
	game.load.image('pipe','assets/pipe.png');
	game.load.image('cup','assets/cup.png');
	game.load.image('google','assets/google.png');
	game.load.image('web','assets/web.png');
	game.load.image('shephertz','assets/shephertz.png');
	game.load.image('gmail','assets/gmail.png');
	game.load.image('facebook','assets/fb.png');
	game.load.image('linkedin','assets/linkedin.png');
	game.load.image('ladder','assets/ladder.png');
	game.load.image('github','assets/github.png');	
	game.load.image('codechef','assets/codechef.png');
	game.load.image('spoj','assets/spojlogo.png');
	game.load.image('contact','assets/contact.png');
	game.load.image('bug','assets/bug.png');
	game.load.image('flag','assets/flag.png');
	game.load.image('cup1','assets/cup1.png');
	game.load.image('cup2','assets/cup2.png');
	game.load.image('squarebrick','assets/brick_small.png');
	game.load.image('questionbrick','assets/question_block_small.png');
	game.load.image('question_hide','assets/question_block_plain_small.png');
	game.load.image('lib','assets/lib.png');
	game.load.image('lib2','assets/lib2.png');
	game.load.image('spcup','assets/spcup.png');
	game.load.image('workaws','assets/workaws.png');
	game.load.image('hack','assets/hack1.png');
	game.load.image('linux','assets/linux.png');
	game.load.image('icpc','assets/icpc.jpg');
	game.load.atlasJSONHash('coin_moving','assets/coin-sprite.png','assets/coin-sprite-map.json');
	game.load.image('waterBubble', 'assets/bubble256.png');
	game.load.image('sun', 'assets/spcool.png');
	game.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
}

function create()
{           

	game.add.sprite(4230-60+100+300,h+25-350-100+80,'linux').scale.setTo(0.2,0.2);

	var clg = game.add.sprite(4230-60,h+25-350-100+80,'wce');
	clg.scale.setTo(1.4,1.4);

	var school = game.add.sprite(2300,h+50-220-200,'school').scale.setTo(0.6,0.6);
	var school2 = game.add.sprite(3390,h-220-200,'jrcolg').scale.setTo(0.8,0.8);
	game.add.text(3350,h-70,"Studied Science at Chhatrapati Shivaji Jr. College, Latur(2015-2017)",style_roboto);

	text.setText("");

	
	//Add Clouds
	for(var i=0;i<20000;i+=1000)
	{
		if(i>=6800 && i<=8100)
		{
			game.add.sprite(i,h-680,'cloud');
			game.add.sprite(i+400,h-630+50,'cloud');
		}
		else
		{
			game.add.sprite(i,h-580,'cloud');
			game.add.sprite(i+400,h-630,'cloud');
		}
	}

	//Add night mode
	night = game.add.tileSprite(0,0,platformLength*2,h,'night');
	night.alpha = 0;
	//Add mountains


	bullets = game.add.group();
    bullets.enableBody = true;
    bullets.physicsBodyType = Phaser.Physics.ARCADE;
    bullets.createMultiple(30, 'bullet');
    bullets.setAll('anchor.x', 0.5);
    bullets.setAll('anchor.y', 1);
    bullets.setAll('outOfBoundsKill', true);
    bullets.setAll('checkWorldBounds', true);
   	
    explosions = game.add.group();

    tiles = game.add.group();
    tiles.enableBody = true;
    tiles.physicsBodyType = Phaser.Physics.ARCADE;
    tiles.createMultiple(9,'questionbrick');
    
   
	game.stage.backgroundColor =bgColor;
	game.world.setBounds(0, 0,platformLength,h+800);

	//Add cp parachute
	//cp = game.add.sprite(9000,h-600,'cp');
	//game.add.tween(cp).to( { y:h-450}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	

	flag = game.add.sprite(platformLength-190,h,'flag');
	flag.scale.setTo(0.5,0.5);
	game.add.sprite(platformLength-220,h-200,'pipe');


	//Add Coco Trees
	//ct1  = game.add.sprite(5000,h,'cocotree');
	ct2  = game.add.sprite(5200,h,'cocotree');
	ct3  = game.add.sprite(5400,h,'cocotree');
	ct4  = game.add.sprite(5600,h,'cocotree');

	var style_white2 = { font:"30px Roboto",fill:"#fff"};
	var style_lang = { font:"30px Roboto" ,fill:"#fff"};
	pythontext=	game.add.text(5250,h-430-30,'C/C++',style_white2);
	jstext = game.add.text(5430,h-450-20,'Python',style_white2);
	ctext = game.add.text(5660,h-460-20,'Javascript',style_white2);

	
//	javatext.alpha = 0.2;
	pythontext.alpha = 0.2;
	jstext.alpha = 0.2;
	ctext.alpha = 0.2;
	//Add Coin
	var mustard_style = { font: "80px Roboto", fill: "#FFF", align: "center" };
	//codetext = game.add.text(6550,h-550,'WEB =>',mustard_style);
	var moving_coin = game.add.sprite(6610,h-600,'coin_moving');
	moving_coin.scale.setTo(2,2);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	
	/* The newer one */
	game.add.sprite(6650,h-200,'pipe');
	new_bug = game.add.sprite(6600,h-180,'bug');
	new_bug2 = game.add.sprite(6500,h-155,'bug');
	new_bug.scale.setTo(-1,1);
	new_bug2.scale.setTo(-0.7,0.7);
	game.add.tween(new_bug).to( { x:6680}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);
	game.add.tween(new_bug2).to( { x:6600}, 2000, Phaser.Easing.Quadratic.InOut, true, 0, 2000, true);

	var xcoord=6500;
	game.add.sprite(xcoord,h-450,'squarebrick');
	game.add.sprite(xcoord+119,h-450,'question_hide');
	game.add.sprite(xcoord+2*119,h-450,'squarebrick');


	var exp_index =0;
	for(xcoord = 7100;xcoord<=9300;xcoord += 2*119)
	{
		game.add.sprite(xcoord,h-450,'squarebrick');
		
	
		 tile = tiles.getFirstExists(false);
		 if(tile)
		 {
		 	tile.reset(xcoord+119,h-450);
		 }
	}

	game.add.sprite(xcoord,h-450,'squarebrick');
	
   	explosions = game.add.group();
    explosions.createMultiple(6, 'kaboom');
	
	var style = { font: "16px monospace", fill: "#fff", align: "center" };
	
	var ground = game.add.tileSprite(0,h-100,platformLength*2,2000,'ground');
	ground.scale.setTo(0.5,0.5);

	var grass = game.add.tileSprite(0,h-100,platformLength*2,50,'grass');
	grass.scale.setTo(0.5,0.5);
	game.add.text(5200,h-70,'Programming Languages',{font:"20px monospace",fill:"#fff"});

	var brick2 = game.add.sprite(12750-70,h-100-36,'brick');
	brick2.scale.setTo(0.5,0.5);
	game.add.sprite(12750-70,h-100,'brick').scale.setTo(0.5,0.5);

	game.add.sprite(12750+350,h-100-36,'brick').scale.setTo(0.5,0.5);
	game.add.sprite(12750+350,h-100,'brick').scale.setTo(0.5,0.5);
	var water2 = game.add.tileSprite(12750,h-100-36+10,700,320,'waterAtlas');
	water2.scale.setTo(0.5,0.5);
	
	water2.animations.add('run');
	water2.animations.play('run',2,true);
	
	//Add Main Banner
	var building = game.add.sprite(500,h-600,'building');
	building.scale.setTo(0.75,0.75);
	var banner = game.add.sprite(200+50,h-200-235-80-70,'mainbanner').scale.setTo(0.7,0.7);

	//Signboards
	game.add.sprite(1300,h-440,'level');
	game.add.text(1370,h-340,"Level 1");
	game.add.text(1440,h-260,"About");

	game.add.sprite(4760,h-440,'level');
	game.add.text(4830,h-340,"Level 2");
	game.add.text(4900,h-260,"Skills");


	
	game.add.sprite(9600,h-440,'level');
	game.add.text(9670,h-340,"Level 3");
	game.add.text(9740,h-260,"Experience",{font:"25px Arial Black"});


	game.add.sprite(11800,h-440,'level');
	game.add.text(11870,h-340,"Level 4");
	game.add.text(11940,h-260,"Projects",{font:"25px Arial Black"});


	game.add.sprite(base5+100,h-440,'level');
	game.add.text(base5+170,h-340,"Level 5");
	game.add.text(base5+235,h-260,"Certifications",{font:"25px Arial Black"});

	game.add.sprite(base7,h-440,'level');
	game.add.text(base7+70,h-340,"Level 7");
	game.add.text(base7+135,h-260,"Online Profiles",{font:"20px Arial Black"});

	for(row = 1;row<=7;row++)
	{
		for(var xcoord = base7+800+(row-1)*60+200;xcoord<=base7+1500-(row-1)*60+260;xcoord+=60)
		{
			 if(row==7)
			 {
			 	game.add.sprite(xcoord+30,h-600,'flag').scale.setTo(0.2,0.2);
			 }
			 game.add.sprite(xcoord,h-100-row*60,'squarebrick').scale.setTo(0.5,0.5);
		}
	}
	


	game.add.sprite(10000,h-330,'frog').scale.setTo(0.8,0.8);
	game.add.sprite(10300,h-360,'frog').scale.setTo(0.9,0.9);
	game.add.sprite(10600,h-385,'frog');
	game.add.sprite(10900,h-450-50,'frog').scale.setTo(1.4,1.4);
	game.add.sprite(11300,h-485,'frog').scale.setTo(1.3,1.3);

	//Add logos
	game.add.sprite(10010,h-210,'cbLogo').scale.setTo(0.40,0.40);
	game.add.sprite(10310-3-1,h-230-4-3,'awslogo').scale.setTo(0.40,0.40);;
	game.add.sprite(10610,h-235-15,'ccLogo').scale.setTo(0.48,0.48);
	game.add.sprite(10915,h-230-50,'pacelogo').scale.setTo(0.2,0.2);
	game.add.sprite(11320,h-300,'acmlogo').scale.setTo(1.0,1.0);

	//Add company texts.
	var style_ex = {font:"16px Arial",fill:orange,align:"center"};
	var style_exS = {font:"12px Arial",fill:orange,align:"center"};
	var style_exSS = {font:"10px Arial",fill:orange,align:"center"};
	
	game.add.text(10080,h-210,"Coding Blocks\ \n Jan.2020-current \n Campus Superhero",style_exS);
	game.add.text(10390,h-220-30," \n AWSEducate \n April.2020-current\nCampus Ambassador",style_exS);
	game.add.text(10690,h-230,"Codechef\nMarch.2020-current\n Mentor",style_ex); 
	game.add.text(10995,h-250-50,"Personality Advancement\n Circle Of \nEngineers\n   Aug.2020-current \n   Chief Creative Head",style_ex);
	game.add.text(11420,h-290,"WCE ACM CHAPTER \n Aug'18-Nov'19 \n Member",style_ex);


	//Add projects
	game.add.sprite(12230,h-330,'gmap');
	game.add.text(12180,h-430,"Automated Hotspot detection on Road Networks\n Identify accident-prone locations on road network \n Detection and ranking of routes based on safety\nAdding safety rank on google map",style_black);

	game.add.sprite(12750,h-250,'covid').scale.setTo(0.4,0.4);
	game.add.text(12750,h-380,"Web Application to detect \n probability of a person suffering \nfrom COVID-19",style_black);


	game.add.sprite(13800,h-450+10,'sptree').scale.setTo(0.6,0.6);


	game.add.sprite(13350,h-210-25,'web');//.scale.setTo(0,0.8);
	game.add.text(13300,h-350,"Developed a website for the Personality \nAdvancement Circle of Engineers \n(PACE)",style_black);
	game.add.sprite(14100,h-370,'lib').scale.setTo(0.3,0.3);
	var andro = game.add.sprite(14200,h-300,'lib2');
	andro.scale.setTo(0.8,0.8);
	var t = game.add.tween(andro).to( { x:14400,}, 2000, Phaser.Easing.Back.InOut, true, 0, 2000, true);
	t.start();
	game.add.text(14100,h-450,"Developed two android apps enabling\n the students and the librarian to track books \nReduced paperwork and time involved",style_black);

	game.add.sprite(14800,h-420,'sptree').scale.setTo(0.6,0.6);


	game.add.sprite(15940,h-420,'sptree').scale.setTo(0.6,0.6);

	game.add.sprite(15850,h-350,'cert').scale.setTo(0.5,0.5);
	game.add.text(15620,h-400,"Codechef Certified Data \nStructures and Algorithms \nProgramme",style_black);
	game.add.sprite(15620,h-270,'codechef');
	game.add.sprite(16500,h-350,'cert').scale.setTo(0.5,0.5);
	game.add.text(16270,h-350,"Docker and kubernetes: \nThe complete guide \nby Stephen Grider",style_black);
	game.add.sprite(16270,h-260,'udemy').scale.setTo(0.4,0.4);
	

	game.add.sprite(tmp5+3400,h-420,'sptree').scale.setTo(0.6,0.6);


	game.add.sprite(16500+400,h-440,'level');
	game.add.text(16500+70+400,h-340,"Level 6");//+70
	game.add.text(16500+55+70+400,h-260,"Activities",{font:"20px Arial Black"}); //+55

	var tmp5 = 16500+400;
	game.add.sprite(tmp5+700,h-350,'cup').scale.setTo(0.8,0.8);
	game.add.text(tmp5+400,h-260,"Runner Up at Technical \nChampionship 2019 organized \n under Mindspark at \nCollege of Engineering, Pune",style_black); //+55


	game.add.sprite(tmp5+1350,h-300,'corona').scale.setTo(0.2,0.2);
	game.add.text(tmp5+950,h-260,"Participated in COVID-19 Hackathon,\n 2020organized by Codechef and \nChandigarh University.",style_black); //+55


	game.add.sprite(tmp5+2100,h-385,'workaws').scale.setTo(0.6,0.6);
	game.add.text(tmp5+1650,h-260,"Organized 2 day workshop on \nCloud Computing(Amazon Web Services) \nin October 2019 as a part of \nWCE ACM STUDENT CHAPTER",style_black); //+55

	game.add.sprite(tmp5+2870,h-365,'hack').scale.setTo(0.6,0.6);
	game.add.text(tmp5+2500,h-260,"Organized WCE HACKATHON'19 \n as a part of \nWCE ACM STUDENT CHAPTER",style_black); //+55

	game.add.sprite(tmp5+3670,h-366,'pacelogo').scale.setTo(0.6,0.6);
	game.add.text(tmp5+3450,h-260,"Organized PRUDENCE'19 as a \npart of Personality Advancement \nCircle of Engineers",style_black); //+55


	//Add Contact Buttons
	//game.add.sprite(base7+600,h-400,'ladder');

	
	var cloud_blog =game.add.sprite(base7+550,h-700+50,'sun');	
	cloud_blog.scale.setTo(1,1);

	cloud_moving1 = game.add.sprite(base7+510,h-650,'cloud');
	cloud_moving2 = game.add.sprite(base7+510-60,h-650,'cloud');

	cloud_moving2.scale.setTo(1.3,1.3);
	cloud_moving1.scale.setTo(1.2,1.2);


	game.add.sprite(base7+450,h-550,'cloud').scale.setTo(1.2,1.2);
	button_github = game.add.button(base7+500,h-490,'github',openGithub, this);
	button_github.scale.setTo(0.20,0.20);
	
	game.add.sprite(base7+800,h-550,'cloud').alpha=0.8;
	button_fb = game.add.button(base7+860,h-520,'facebook',openFacebook,this);
	
	var hackerearth_cloud=game.add.sprite(base7+650+30,h-350+15,'cloud');
	hackerearth_cloud.scale.setTo(1.1,1.1);

	button_linked = game.add.button(base7+700+30,h-290,'linkedin',openHackerearth, this);
	button_linked.scale.setTo(0.8,0.8);
	
	var gmail_cloud=game.add.sprite(base7+670,h-440,'cloud');
	gmail_cloud.scale.setTo(1.1,1.1);
	gmail_cloud.alpha =0.95;
	button_gmail = game.add.button(base7+720,h-400,'gmail',openGmail, this);
	button_gmail.scale.setTo(0.8,0.8)
	
	

	
	var cloud_codechef=game.add.sprite(base7+400,h-400,'cloud');
	cloud_codechef.scale.setTo(1.4,1.4);
	cloud_codechef.alpha=0.8;
	button_codechef = game.add.button(base7+430,h-330,'codechef',openCodechef, this).scale.setTo(0.6,0.6);
	
	game.add.text(base7+720,h-100,"click on the clouds to open",style_white);


	game.add.sprite(base7+1000,h-420,'sptree').scale.setTo(0.6,0.6);
	game.add.sprite(base7+1400,h-420,'sptree').scale.setTo(0.6,0.6);






	var hometown = game.add.sprite(1650+50,h-270-180,'hometown').scale.setTo(0.9,0.9);

	game.add.sprite(6100,h+60-360,'brick');
	
	aieee_cup=game.add.sprite(2800,-500,'cup1');
	game.add.text(4200,h-70,"WCE Sangli, SHIVAJI UNIVERSITY",style_roboto);
	
	aieee_cup2=game.add.sprite(3750,-500,'cup2');

	inst_text = game.add.text(290,h-50,"Press the Arrow Keys  OR use << Screen Buttons >> ",{font:"30px Arial",fill:"#fff"});
	//Add hero 
	hero = game.add.sprite(100,-300,'soham');
	hero.animations.add('run');
	
    //	hero tween
	var entryTween = game.add.tween(hero);
	entryTween.to({x:starting_point,y:h-245-hero.height},2000,Phaser.Easing.Bounce.Out, true);
	entryTween.start();
	
	cursors = game.input.keyboard.createCursorKeys();
	game.physics.startSystem(Phaser.Physics.ARCADE);
	game.physics.arcade.enable(hero);
	game.physics.arcade.enable(night);
	night.body.velocity.x = -30;

	game.input.mouse.mouseWheelCallback = mouseWheel;

	game.camera.follow(hero);
	game.camera.follow(hero,Phaser.Camera.FOLLOW_PLATFORMER);
	//Create Water Bubbles
	back_btn = game.add.button(10,h-94,'back');
	fwd_btn = game.add.button(w-10,h-94,'back');
	fwd_btn.scale.x *= -1;
	fwd_btn.fixedToCamera = true;
	back_btn.fixedToCamera = true;
	back_btn.alpha = 1;
	
	download_btn = game.add.button(w-150,5,'download',openResume,this);
	download_btn.fixedToCamera = true;
	game.add.text(w-120,100,"Download PDF",{font:"10px Roboto",fill:"#000"}).fixedToCamera=true;
	night_tween = game.add.tween(night);
	night_tween.to({ alpha:0}, 10000)
	
	if(w<=481)
	{
		back_btn.alpha = 1;
	}
	
	explosions = game.add.group();
    explosions.createMultiple(10, 'kaboom');
   
}


function addMovingCoin(x,y,scale)
{
	var moving_coin = game.add.sprite(x,y,'coin_moving');
	moving_coin.scale.setTo(scale,scale);
	moving_coin.animations.add('run');
	moving_coin.animations.play('run',20,true);
	return moving_coin;
}


function collisionHandler(bullet,tile)
{
   
    
	var explosion = explosions.getFirstExists(false);
	if(explosion)
	{
		explosion_count++;
	    explosion.reset(tile.body.x-50, tile.body.y-50);
	    explosion.scale.setTo(1.5,1.5);
	    explosion.animations.add('kaboom');
	    explosion.animations.play('kaboom', 60, false, true);
	 }

    tile.kill();
    bullet.kill();

    var bv = 7275;
    var inc = 119*2;

    if(explosion_count==1){
		var css = game.add.sprite(bv,h-400,'html');
		css.scale.setTo(0.5,0.5);
		css.anchor.setTo(0.5,0.5);
		game.add.tween(css).to({y:h-550},300).start();
		game.add.tween(css.scale).to({y:0.9,x:0.9},500).start();
		var coin = addMovingCoin(bv,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==2)
	{
	var html= game.add.sprite(bv+1*inc,h-500,'css');
		html.scale.setTo(0.5,0.5);
		html.anchor.setTo(0.5,0.5);
		game.add.tween(html).to({y:h-550},300).start();
		game.add.tween(html.scale).to({y:0.9,x:0.9},500).start();
	
			var coin = addMovingCoin(bv+inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});
	

	}
	else if(explosion_count==3)
	{
		var js= game.add.sprite(bv+2*inc,h-500,'js');
		js.scale.setTo(0.5,0.5);
		js.anchor.setTo(0.5,0.5);
		game.add.tween(js).to({y:h-550},300).start();
		game.add.tween(js.scale).to({y:0.9,x:0.9},800).start();
		
		var coin = addMovingCoin(bv+2*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}

	else if(explosion_count==4)
	{
	
	var py= game.add.sprite(bv+3*inc,h-500,'flask');
	py.scale.setTo(0.2,0.2);
	py.anchor.setTo(0.5,0.5);
	game.add.tween(py).to({y:h-550},300).start();
	game.add.tween(py.scale).to({y:0.6,x:0.6},500).start();

		var coin = addMovingCoin(bv+3*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	
	}
	else if(explosion_count==5)
	{

	var andro= game.add.sprite(bv+4*inc,h-500,'android');
	andro.scale.setTo(0.2,0.2);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+4*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==6)
	{

	var andro= game.add.sprite(bv+5*inc,h-500,'linu');
	andro.scale.setTo(0.15,0.15);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+5*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==7)
	{

	var andro= game.add.sprite(bv+6*inc,h-500,'git');
	//andro.scale.setTo(0.04,0.04);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+6*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==8)
	{

	var andro= game.add.sprite(bv+7*inc,h-500,'docker');
	//andro.scale.setTo(0.6,0.6);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+7*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==9)
	{

	var andro= game.add.sprite(bv+8*inc,h-500,'aws');
	andro.scale.setTo(0.02,0.02);
	andro.anchor.setTo(0.5,0.5);
	game.add.tween(andro).to({y:h-550},300).start();
	game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

		var coin = addMovingCoin(bv+8*inc,h-400,2);
		var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
		t.onComplete.add(function(){coin.alpha=0;});

	}
	else if(explosion_count==10)
	{

	// var andro= game.add.sprite(bv+9*inc,h-500,'aws');
	// andro.scale.setTo(0.2,0.2);
	// andro.anchor.setTo(0.5,0.5);
	// game.add.tween(andro).to({y:h-550},300).start();
	// game.add.tween(andro.scale).to({y:0.6,x:0.6},600).start();

	// 	var coin = addMovingCoin(bv+9*inc,h-400,2);
	// 	var t =game.add.tween(coin).to({x:hero.x+100,y:hero.y+50},500).start();
	// 	t.onComplete.add(function(){coin.alpha=0;});

	}





}


function fireBullet () 
{

    
    if (game.time.now > bulletTime && direction=="right"&&explosion_count<max_explosion_count)
    {
        bullet = bullets.getFirstExists(false);

        if (bullet)
        {
            bullet.reset(hero.x+hero.width/2+50, hero.y+100);
            bullet.scale.setTo(1.5,1);
            bullet.body.velocity.y = -400;
            bulletTime = game.time.now + 200;
        }

        bullet2 = bullets.getFirstExists(false);

        if (bullet2)
        {
            //  And fire it
            bullet2.reset(hero.x+ hero.width/2+100, hero.y+100);
            bullet2.scale.setTo(1.5,1);
            bullet2.body.velocity.y = -400;
            bulletTime = game.time.now + 300;
        }
    

    }

}

function resetBullet (bullet) 
{
    bullet.kill();
}

function moveBack()
{
	hero.x -= 80;
	hero.animations.play('run',15,true);
}


function mouseWheel(event) 
{
		inst_text.setText("");
		if(game.input.mouse.wheelDelta>0)
		{
			hero.x +=60;
			hero.animations.play('run',15,true);	
		}
		else
		{
			hero.x -=60;
			hero.animations.play('run',15,true);	
		}
}

function moveforward()
{

	inst_text.setText("");
	hero.x +=80;
	
}

function forwardButtonPressed()
{
	
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true);

	if((ptr.x>=w-150 && ptr.y>=h-150&&ptr.isDown)||cursors.right.isDown||scroll>0)
	{
		if(direction =="left")
		{
			direction= "right";
			hero.scale.setTo(1,1);
			hero.anchor.setTo(0,0);	
		}
		return true;
	}
	else
		{
			return false;
		}

}

function backButtonPressed()
{
	var ptr = game.input.activePointer ;
	hero.animations.play('run',15,true); 
	if((ptr.x<=150 && ptr.y>=h-150&&ptr.isDown)||cursors.left.isDown||scroll<0)
	{
		if(direction =="right"){
		direction= "left";
		hero.scale.setTo(-1,1);
	}
	return true;
	}
	else		
		return false;
}

function update()
{

	game.physics.arcade.overlap(bullets, tiles, collisionHandler, null, this);
	var scroll = game.input.mouse.wheelDelta;

	if(hero.x>2600&&hero.x<=2650)
	{
		moveHillsUp();
	}

	if(forwardButtonPressed())
	{
		inst_text.setText("");
		hero.x +=30;
		hero.animations.play('run',15,true);
	}


	else if(backButtonPressed())
	{
		hero.x -=30;
	}
	else{
		hero.animations.stop('run');
	}
	
	if(hero.x<=0&&direction=="right")
	{
		hero.x =0;
	}
	if(hero.x <=150&&direction=="left")
	{
		hero.x = 150;
	}
	
	if(hero.x<=6450&& hero.x>=6200 &&hero.y == h-650 &&backButtonPressed() )
	{
		game.add.tween(hero).to({x:5800,y:h-300},300).start();
		hero.x=5780;
		hero.y = h-300;
		//console.log("This tween");
	}
	if(hero.x<8700 && hero.y>h &&(backButtonPressed()))
	{
		hero.x = 8700;
		//console.log("Yeh valal");
	}
	//Throw into ocean right
	if(hero.x >base5)
	{
		night_tween.start();
	}

	if(hero.x > 8750 && hero.x <8900 && hero.y > h &&direction!='right')
	{
		var t =game.add.tween(hero).to({x:8800,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1;;game.camera.y -=150;})
	}

	if(hero.x>=12500&&hero.x<=12650&&(forwardButtonPressed()))
	{
		var t = game.add.tween(hero).to({x:12800,y:h-700},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:13100,y:h-300},200).start()});
	}

	if(hero.x >=13000&&hero.x<=13100&&(backButtonPressed()))
	{
		var t = game.add.tween(hero).to({x:12400,y:h-600},100);
		t.start();
		t.onComplete.add(function(){ game.add.tween(hero).to({x:12400,y:h-300},200).start();});
	}



	if(hero.x > 4500)
	{
		showPlantsFromBottom();
	}


	if(hero.x>platformLength-350)
	{
		hero.x = platformLength-350;
		var t = game.add.tween(flag).to({y:h-400},1000);
		t.start();
		t.onComplete.add(function(){game.add.text(platformLength-185,h-370,"Thank you\n Visit Again !",style_whitee);},this);
	}

	if(hero.x > base7+500)
	{
		game.add.tween(cloud_moving2).to({x:base7,alpha:0},5000).start();
		game.add.tween(cloud_moving1).to({x:platformLength,alpha:0},5000).start();

	}

	
	if(hero.x>5800 && hero.x <=6000 && hero.y>= h-245-hero.height-50 && direction!='left')
	{
		game.add.tween(hero).to({x:6500,y:h-650},100).start();
	}
	
	//Throw onto Ground
	if(hero.x > 6830 && hero.x <7000 && direction=="right"){
		hero.y = h - 300;  

	}
	if(hero.x <=7000&&hero.x>6900 && direction=="left" ){
		hero.y = h - 650;

	}

	if(hero.x > 9250 && hero.x <9300 && hero.y > h &&direction!='left')
	{
		var t =game.add.tween(hero).to({x:9350,y:h-300},1000).start();
		t.onComplete.add(function(){ hero.alpha=1;game.camera.y -=150;})
	}
	if(hero.x >=7100 && hero.x <=9300){
		fireBullet();
	}
	

}
function animateBubble()
{
				bubble.scale.setTo(0.75,0.75);
				game.physics.enable(bubble,Phaser.Physics.ARCADE);
				bubble.body.angularVelocity = 100;
}

function moveHillsUp()
{

	var ct = game.add.tween(aieee_cup);
	ct.to({y:h-410},800,Phaser.Easing.Bounce.Out, true);
	ct.start();

	var ct2 = game.add.tween(aieee_cup2);
	ct2.to({y:h-410},3000,Phaser.Easing.Bounce.Out, true);
	ct2.start();



}

function showPlantsFromBottom()
{

	var plantsTween2 = game.add.tween(ct2);
	plantsTween2.to({y:h-420},300);
	plantsTween2.start();

	
	var plantsTween3 = game.add.tween(ct3);
	plantsTween3.to({y:h-420},300);
	plantsTween3.start();

	
	var plantsTween4 = game.add.tween(ct4);
	plantsTween4.to({y:h-420},300);
	plantsTween4.start();
	plantsTween4.onComplete.add(fadeText,this);

}

function fadeText()
{

	 game.add.tween(jstext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(ctext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	 game.add.tween(pythontext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
	// game.add.tween(javatext).to( { alpha: 1 }, 2000, Phaser.Easing.Linear.None, true).start();
}

function render()
{
	
	if(debug)
		{game.debug.spriteInfo(hero,32,32);}
}

function loadStart() 
{

	text.anchor.setTo(0.5,0.5);
	//text.setText("Loading ...");

	//console.log("File complete...");

	//console.log("Called Log Start !");
}

//	This callback is sent the following parameters:
function fileComplete(progress, cacheKey, success, totalLoaded, totalFiles) 
{
	//game.add.sprite(w/2,h/2,'loader');
	console.log("File complete...");

	text.setText("File Complete: " + progress + "% - " + totalLoaded + " out of " + totalFiles);

}

function loadComplete() 
{
	//text.setText("Load Complete");
}

function openGithub()
{
 	var win = window.open(github_url);
 	win.focus();
}
function openCodechef()
{
 	var win = window.open(codechef_url);
 	win.focus();
}
function openLinkedIn()
{
 	var win = window.open(linkedin_url);
 	win.focus();
}

function openFacebook()
{
	 var win = window.open(facebook_url);
 	 win.focus();
}

function openHackerearth()
{
 var win = window.open(linkedin_url);
 win.focus();
}


function openWebsite()
{
 var win = window.open(website_url);
 win.focus();
}

function openResume()
{
 var win = window.open(resume_url);
 win.focus();
}

function openGmail()
{
 var win = window.open("mailto:mr.soham143@gmail.com");
 win.focus();
}

