"use strict";
    

// ******************************** START ********************************

$(document).ready(function() 
{
    var musicstart  = $("#musicstart")[0];
    
    $("#start").fadeIn(3000);
    $("#muteSound").fadeIn(3000);
    $("#story").fadeOut(0);
    $("#game").fadeOut(0);
    $("#settings").fadeOut(0);
    $("#littleBoy").fadeOut(0);
    $("#leader").fadeOut(0);
    $("#dog").fadeOut(0);
    $("#evil").fadeOut(0);
    $("#heart").fadeOut(0);
    $("#finish").fadeOut(0);
    $("#finishMsg").fadeOut(0);
    $("#lose").fadeOut(0); 
    $("#healthBar").fadeOut(0);
    $("#energyBar").fadeOut(0);
    $("#gamePad").fadeOut(0);
    
   
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
    {
        $("#startmsg").html("TOUCH the screen to start");
    }
    
    
    musicstart.play();
});




// ******************************** MUTE ********************************

$(function()
{
    var muteBool = false;
    
    $("#muteSound").click(function ()
    {
        if (muteBool == false)
        {
            $("audio").prop('muted', true);
            $("#muteSound").attr("src","img/mute.png");
            muteBool = true;
        }
        
        else
        {
            $("audio").prop('muted', false);
            $("#muteSound").attr("src","img/sound.png");
            muteBool = false;
        }
   });
    
    
    
// ******************************** SETTINGS ********************************
    
    $("#openSettings").click(function ()
    {
        $("#settings").fadeIn(500);
    });
    
    
    $("#closeSettings").click(function ()
    {
        $("#settings").fadeOut(500);
    });
    
    
  
});







// ******************************** INTRO ********************************

$(function(){

    var enterplus   = 0;
    var storyplus   = 0;
    var enterplus   = 0;
    var storyInt    = null;
    var startshot   = $("#startshot")[0];
    var skipIntro   = $("#skipIntro");
    var story       = [
        "In the town of Konoha. There echoes a legend. A legend held dearly by the inhabitants of the village tells of a boy... ",
        "A boy who, after battling evil and saving the town of Konoha, crept away from the town that had made him a legend... ",
        "done with battles he once waged across time, he embarked on a journey. A secret and personal journey... ",
        "A journey in search of a mysterious group..."];
    
    //sound music of stage
    var themeforest = $("#themeforest")[0];
    var themetown   = $("#themetown")[0];
    var musictown   = $("#musictown")[0];
    var musictemple = $("#musictemple")[0];
    var musictown2  = $("#musictown2")[0];
    var nighttheme  = $("#nighttheme")[0];
    var raintheme   = $("#raintheme")[0];
    var evilmusic   = $("#evilmusic")[0];
    
    
    
    var leftInterval;
    var rightInterval;
    var spaceInterval;
    var cInterval;
    var xInterval;
    

    
    
    
    
    
    
    
// ******************************** GAMEPAD ********************************

window.onload = function() 
{
    
    $("#start").bind('touchstart', function()
    {
        if (enterplus == 0)
        {
            musicstart.pause();
            startshot.play();
            $("#start").fadeOut(3000);
            
            enterplus++;
            tellStory();
        } 
    });
    
    
    
    $("#rightPad").bind('touchstart', function()
    {
        rightInterval = setInterval(function() {right();}, 30); 
    }).bind('touchend', function()
    {
        clearInterval(rightInterval); 
        stopRun();
    });
    
    
    $("#leftPad").bind('touchstart', function()
    {
        leftInterval = setInterval(function() {left();}, 30); 
    }).bind('touchend', function()
    {
        clearInterval(leftInterval); 
        stopRun();
    });
    
    
    
    $("#spacePad").bind('touchstart', function()
    {
        spaceInterval = setInterval(function() {punch();}, 30); 
        
        if(tuto == 0)
        {
            pad = 1;
            callLearn();
        }
        
        $(this).data('clicked', true);
        
    }).bind('touchend', function()
    {
        clearInterval(spaceInterval); 
        stopPunch();
    });
    
    
    $("#cPad").bind('touchstart', function()
    {
        cInterval = setInterval(function() 
        {
            if(tuto == 2)
            {
                pad = 3;
                callLearn();
            }
            
            regain();
        }, 30);
        
    }).bind('touchend', function()
    {
        clearInterval(cInterval); 
        stopRegain();
    });
    
    
    $("#xPad").bind('touchstart', function()
    {
        xInterval = setInterval(function() {specialAttack();}, 30); 
        if(tuto == 1)
        {
            pad = 2;
            callLearn();
        }
        
    }).bind('touchend', function()
    {
        clearInterval(xInterval); 
    });
}
       
    
function callLearn()
{
    if (pad == 1 && tuto == 0)
    {
        learn1();
    }
                
    if (pad == 2 && tuto == 1)
    {
        learn2()   
    }
                
    if (pad == 3 && tuto == 2 && powerPlus == 3)
    {
        learn3();
    }
}

    
    
    
    
    
    
    
    
    
    
    
  
        $(document).keydown(function(a) 
        {
        //ENTER - START GAME
        if (a.keyCode == 13 && enterplus == 0)
        {
            musicstart.pause();
            startshot.play();
            $("#start").fadeOut(3000);
            
            enterplus++;
            tellStory();
        }
        
    });
  
        function tellStory()
        {
            $("#story").fadeIn(3000);
            
            storyInt = setInterval(function () 
            {
                $("#intromsg").fadeOut(2000, function () 
                {
                    $(this).text(story[storyplus++]).fadeIn(6000);
                    
                    if (storyplus == 4)
                    {
                        beginGame();
                    }
                });
                
            }, 8001);
            
            
 // ************* SKIP INTRO *************           
            skipIntro.click(function() 
            {
                beginGame();  
            });
            
        }
    
    
// ************* Begin Game ************* 
    function beginGame()
    {
        clearInterval(storyInt);
        keyTouch();
        $("#story").fadeOut(2000);
                        
        setTimeout(function()
        {
            $("#game").fadeIn(3000);
            $("#healthBar").fadeIn(3000);
            $("#energyBar").fadeIn(3000);
            
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) 
            {
                $("#gamePad").fadeIn(3000);
            }
            
            themeforest.play();
            detectMobile();
        }, 2500);
    }
    
    


// ******************************** KEYBORD - GAME + VAR ********************************


    
    var punchsound      = $("#punchsound")[0];
    var littleBoySound  = $("#littleBoySound")[0];
    var leaderHey       = $("#leaderHey")[0];
    var leaderMmm       = $("#leaderMmm")[0];
    var leaderGood      = $("#leaderGood")[0];
    var special         = $("#special")[0];
    var run             = $("#run")[0];
    var chakra          = $("#chakra")[0];
    var dogSound        = $("#dogSound")[0];
    var hearthSound     = $("#hearthSound")[0];
    var evilSound       = $("#evilSound")[0];
    var gameoverSound   = $("#gameoverSound")[0];
    var winSound        = $("#winSound")[0];
    var heartBeat       = $("#heartBeat")[0];
    var narutoWin       = $("#narutoWin")[0];
    var evilWin         = $("#evilWin")[0];
    var evilDead        = $("#evilDead")[0];
    var evilHey         = $("#evilHey")[0];
    
    
    
    var plusPos         = 0;
    var plusPosEvil     = 0;
    var plusStage       = 0;
    var on              = 0;
    var pad             = 0;
    var tuto            = -1;
    var powerPlus       = 3;
    var evilHealth      = 150;
    var healthPlus      = 5;
    var touchEvil       = 0;
    var stageOne        = false;
    var stageOneb       = false;
    var changeEvil      = false;
    var moveLock        = false;
    var littleBoyText   = $("#littleBoyText");
    var leaderText      = $("#leaderText");
    var interSpecial    = null;
    var randomHeart     = Math.floor(Math.random() * 1500);

    
    var positie;
    var positieEvil;
    var positieHeart;
    var intervalEvil;
    var intervalEvil1;
    var intervalEvil2;
    var intervalPunch1;
    var intervalPunch2;
    var intervalHeart;
    var intervalH1;
    var intervalAtt;
    var timeOutEvil;
    var timeOutChakra;
    var intervalMobile;
    
    setInterval(function() 
    {
        positie         = $("#naruto").position();
        positieEvil     = $("#evil").position();
        positieHeart    = $("#heart").position();
        
        $("#hidden").scrollLeft(positie.left);
        
    },1);
    
    
    function detectMobile()
    {
        intervalMobile = setInterval(function() 
        {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) 
            {
                $("#gamePad").fadeIn(0);
            }
        
            else
            {
                $("#gamePad").fadeOut(0);
            }
        
        },1);
    }
    
    
    function keyTouch()
    {
    $(document).keydown(function(e) 
    {
        
        //alert(e.keyCode);
        
        switch (e.keyCode)
        {           
           /* case 65:    plusStage = 5;
                        nextStage();
                        tuto = 3;
                        
                        break;  
                
            case 90:    healthPlus = 5;
                        health();
                        
                        break; */
                
            case 67:    regain();      
                        break;
                
            //SPACE - PUNCH
            case 32:    punch();
                        break;
                

            //LEFT - MOVE LEFT
            case 37:    left();
                        break;
                
                
            //RIGHT - MOVE RIGHT
            case 39:    right();
                        break;
                
            //X - SPECIAL ATTACK
            case 88:    specialAttack();
                        break;
        
        }
        
            
    }).keyup(function(e)
    {
        switch (e.keyCode)
        {
            case 32:    stopPunch();  break;    //Space
            case 37:    stopRun();  break;    //Links     
            case 39:    stopRun();  break;    //Rechts
            case 67:    stopRegain(); break;
        }
    });
}
    

function left()
{
    if(moveLock == false)
    {
        if($("#naruto img").attr("src") !== "img/run-left.gif")
        {
            $("#naruto img").attr("src", "img/run-left.gif");
        }
                
        $("#naruto").css('left',   positie.left - 15 + 'px');
        
        run.play();
        plusPos--;
        heartAdd();
                
        $(function()
        {
            if (plusPos <= 0)
            {
                $("#naruto").css('left',  positie.left + 0 + 'px');
                plusPos = 0;
            }
                            
            if (stageOneb == true)
            {
                $("#naruto").css('left',  positie.left + 0 + 'px');
                plusPos = 200;
            }
                            
         });
      }
}
    
function right()
{
    if(moveLock == false)
    {
        if($("#naruto img").attr("src") !== "img/run-right.gif")
        {
            $("#naruto img").attr("src", "img/run-right.gif");
        }
                        
        $("#naruto").css('left',   positie.left + 15 + 'px');
        
        run.play();
        plusPos++;
        littleBoy();
        heartAdd();
                
        $(function()
        {
            if (plusPos >= 95 && plusPos <= 150)
            {
                $("#naruto").css('left', positie.left + 0 + 'px');
                plusPos = 95;
                nextStage();
            }
        });
    }
}
    
function punch()
{
    if (plusStage >= 3 && tuto >= 0)
    {   
        intervalPunch1 = setTimeout(function()
        {
            $("#naruto img").attr("src", "img/naruto-kick.png");
            punchsound.play();
        }, 50);
                            
        if (collision(positie.left, positie.top, positieEvil.left, positieEvil.top))
        {   
            if($("#evil img").attr("src") === "img/evil-att.gif")
            {
                clearTimeout(intervalPunch1);
                clearTimeout(intervalPunch2);
            }
                            
            intervalPunch2 = setTimeout(function()
            {
                $("#evil img").attr("src", "img/evil.gif"); 
                evilHealth--;
                $("#evil img").attr("src", "img/evilBlessed.gif");
            }, 50);    
        }
    }
}
    
function regain()
{
    if (plusStage >= 3 && $("#naruto img").attr("src") !== "img/chakra.gif" && tuto >= 2)
    {
        chakra.play();
        $("#naruto img").attr("src", "img/chakra.gif");
                            
        if (powerPlus < 3)
        {
            timeOutChakra = setInterval(function() {powerPlus++; power();} ,2000);
        }
    }  
}
    
function specialAttack()
{
    if (plusStage >= 3 && powerPlus > 0 && $("#naruto img").attr("src") !== "img/special.gif" && tuto >= 1)
    {
        special.play();
        $("#naruto img").attr("src", "img/special.gif");
                            
        setTimeout(function()
        {
            $("#naruto img").attr("src", "img/naruto_standing1.gif");
            powerPlus--;
            power();
            clearInterval(interSpecial);            
        }, 3500);
                            
        setTimeout(function ()
        {
            if (collision(positie.left, positie.top, positieEvil.left, positieEvil.top))
            { 
                clearTimeout(intervalEvil);
            }
        },1000);
                                
        setTimeout(function ()
        {
            if (collision(positie.left, positie.top, positieEvil.left, positieEvil.top))
            { 
                $("#evil img").attr("src", "img/evilBlessed.gif");
                setTimeout(function(){$("#evil img").attr("src", "img/evil.gif");}, 800);
                            evilHealth -= 5;
                                    clearTimeout(timeOutEvil);
                                }
                            },2500);
                        
                        }  
}
    
function stopRun()
{
    $("#naruto img").attr("src", "img/naruto_standing1.gif"); run.pause();
}
    
function stopPunch()
{
    setTimeout(function() {$("#naruto img").attr("src", "img/naruto_standing1.gif");},55);
}
    
function stopRegain()
{
    $("#naruto img").attr("src", "img/naruto_standing1.gif"); clearInterval(timeOutChakra); chakra.pause(); chakra.currentTime = 0;
}
    

    
    
    
    
    // *************************************************** STORY ***************************************************

    
    
    var showText = function (target, message, index, interval) 
        {   
            if (index < message.length) 
            {
                $(target).append(message[index++]);
                setTimeout(function () { showText(target, message, index, interval); }, interval);
            }
        }
    
    
    function littleBoy()
    {
        //Var
        
        
        if (plusPos >= 200)
        {
            $("#naruto").css('left', positie.left + 0 + 'px');
            plusPos = 200;
        }
           
        
        
        
        // ******************************** LITTLE BOY ********************************
        if (plusPos == 60 && plusStage == 1  && stageOne == false)
        {
            
            
            //little bot actions
            $("#littleBoy img").attr("src", "img/littleBoyReturn.gif");
            littleBoySound.play();
            
            //stop Naruto
            plusPos = 200;
            moveLock = true;
            setTimeout(function() 
            {
                plusPos = 60; 
                stageOneb = false; 
                stageOne = true;
                moveLock = false;
            
            }, 10000);
            stageOneb = true;
            
            //Text
            littleBoyText.fadeIn(500);
             showText("#littleBoyText", "Hi you, I have never seen you before. Pay attention, the village leader is not very happy today. If you help her, it may be able to help you. Good luck the strange!", 0, 50);
            setTimeout(function() {littleBoyText.fadeOut(500);}, 10000);
            
        } 
        
        
        // ******************************** LEADER ********************************
        if (plusPos == 80 && plusStage == 2  && stageOne == false)
        {

            //leader actions
            leaderHey.play();
            
            //stop Naruto
            plusPos = 200;
            moveLock = true;
            setTimeout(function() 
            {   
                run.play(); 
                $("#naruto img").attr("src", "img/run-right.gif");
                $("#naruto").animate({marginLeft: '+=300px'}, 1500);
                stageOneb = false; 
                stageOne = true;
                moveLock = false;
                nextStage();
            
            }, 5000);
            stageOneb = true;
            
            //Text
            leaderText.fadeIn(500);
            showText("#leaderText", "Hey you're... Naruto right??? Come with me please. I need your help, it's very urgent!", 0, 50);
            setTimeout(function() {leaderText.fadeOut(500); $("#leaderText").html("");}, 5000);
            
        } 
        
        if (plusPos == 10 && plusStage == 3  && stageOne == false)
        {

            //leader actions
            leaderMmm.play();
            
            //stop Naruto
            plusPos = 200;
            stageOneb = true;
            moveLock = true;
            
            //Text
            leaderText.fadeIn(500);
            showText("#leaderText", "Listen carefully. A dangerous group called the Akatsuki brings chaos in all villages. In exchange for secret techniques, I implore your help!", 0, 50);
            
            setTimeout(function() 
            {
                $("#leaderText").html(""); 
                showText("#leaderText", "So let's begin. Press on SPACE to use the basic attack.", 0, 50); 
                leaderMmm.play();
                tuto++;
            }, 10000);
            
            
            
            $(document).keydown(function(e)
            {
                if (e.keyCode == 32 && tuto == 0)
                {
                    learn1();
                }
                
                if (e.keyCode == 88 && tuto == 1)
                {
                    learn2()   
                }
                
                if (e.keyCode == 67 && tuto == 2 && powerPlus == 3)
                {
                    learn3();
                }
                
            });
            
        }
        
        
        // ******************************** DOG ********************************
        if (plusPos == 10 && plusStage >= 4 && plusStage <= 5)
        {
            $("#dog").animate({marginLeft: '+=1000px'}, 3000);
            dogSound.play();
            setTimeout(function() {$("#dog").fadeOut(500); $("#dog").animate({marginLeft: '-=1000px'}, 500);}, 4001);  
        }
        
        
        // ******************************** EVIL ********************************
        if (plusPos == 40 && plusStage == 6 && stageOne == false)
        {   
            
            evilmusic.play();
            $("#evil").fadeIn(0);
            plusPos = 200;
            moveLock = true;
            stageOneb = true;
            
            $("#evil").animate({top: '+=140px'}, 900);
            
            setTimeout(function() 
            { 
                $("#evilText").fadeIn(500);
                $("#evil img").attr("src", "img/evil.gif");
                showText("#evilText", "Naruto!!! The Akatsuki will reign this rotten world, the man is only good to hurt others. We'll clean all this !!!", 0, 50);
                evilHey.play();
            },900);
                 
            setTimeout(function() 
            { 
                $("#evilText").html("");
                showText("#evilText", "The best way to restore order is to remake humanity by eliminating all human, if you try to stop me, I'll have to kill you.", 0, 50);
            },10000);
            
            setTimeout(function() 
            { 
                stageOneb = false; 
                stageOne = true;
                moveLock = false;
                $("#evilText").fadeOut(500); 
                $("#evilText").html("");
                plusPos = 40;
                plusPosEvil = 75;
            
            }, 20000);
            
            
            setTimeout(function() 
            {    
                    intervalAtt = setInterval(function() 
                    {   
                        touchEvil       = (plusPos * 15) + 135;
                        plusPosEvil;
                        
                        if (plusPos < plusPosEvil)
                        { 
                            $("#evil").animate({left: touchEvil + 'px'}, 1500);
                            
                            if($("#evil img").attr("src") !== "img/evil.gif")
                            {
                                $("#evil img").attr("src", "img/evil.gif");
                            }
                          
                            intervalEvil1 = setInterval(function() 
                            {   
                                if (plusPos != plusPosEvil)
                                {
                                    plusPosEvil--;
                                }
                                
                                ifPosSame();
                                   
                            },1); 
                        }
                        
                        
                        if (plusPos > plusPosEvil)
                        { 
                            $("#evil").animate({left: touchEvil + 'px'}, 1500);
                            
                            
                            if($("#evil img").attr("src") !== "img/evil.gif")
                            {
                                $("#evil img").attr("src", "img/evil.gif");
                            }
                            
                            intervalEvil2 = setInterval(function() 
                            {
                                if (plusPos != plusPosEvil)
                                {
                                    plusPosEvil++;
                                }
                                
                                ifPosSame();
                                
                            },1);
                        }
                        
                        if (plusPos == plusPosEvil)
                        {
                            plusPosEvil = plusPos; 

                            if($("#evil img").attr("src") !== "img/evil-att.gif")
                            {
                                $("#evil img").attr("src", "img/evil-att.gif");
                                
                                if (collision2(positie.left, positie.top, positieEvil.left, positieEvil.top))
                                {
                                    $("#naruto img").attr("src", "img/narutoBlessed.gif");
                                    evilSound.play();
                                    
                                    intervalEvil = setTimeout(function() 
                                    {
                                        healthPlus--; 
                                        health();
                                        clearTimeout(intervalEvil);
                                        $("#evil img").attr("src", "img/evil.gif");
                                    },200);
                
                                }
                            } 
                        }
            
                 
                        /* ************************* You win ************************* */
                        if (evilHealth <= 0)
                        {
                            $("#evil").fadeOut(2000);
                            evilmusic.pause();
                            raintheme.pause();
                            heartBeat.pause();
                            winSound.play();
                            evilDead.play();
                            
                            setTimeout(function() 
                            {
                                narutoWin.play(); 
                                heartBeat.pause();
                            }, 2500);
                            
                            moveLock = true;
                            tuto = -1;
                            clearInterval(intervalMobile);
                            
                            clearInterval(intervalHeart);
                            clearInterval(intervalAtt);
                            clearInterval(intervalEvil1);
                            clearInterval(intervalEvil2);
                            $("#game").fadeOut(10000);
                            $("#healthBar").fadeOut(10000);
                            $("#energyBar").fadeOut(10000);
                            $("#gamePad").fadeOut(10000);
                            
                            setTimeout(function() 
                            {
                                $("#finishMsg").html("To be continued");
                                $("#finishMsg").fadeIn(5000); 
                            }, 10000);
                            
                            setTimeout(function() 
                            {
                                $("#finishMsg").fadeOut(1000);
                                $("#finish").fadeIn(6000); 
                            }, 16000);
                            
                            $("#submitFinish").click(function()
                            {
                                startshot.play();
                                $("#finish").fadeOut(5000);
                                
                                setTimeout(function() 
                                {
                                    location.reload();
                                }, 7000);
                                
                            });
                            
                        }
                        
                    },1600);  
                
            
            }, 20200);
             
        }
    }
    
    
    
    
    
    
    // *************************************************** STAGES ***************************************************
    function nextStage()
    {
        if (plusStage == 0)
        {
            $("#game").fadeOut(1000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#game").css("background-image", "url(img/stage/town2.gif)");
                
                $("#littleBoy").fadeIn(0);
                $("#game").fadeIn(2000);
                $("#healthBar").fadeIn(2000);
                $("#energyBar").fadeIn(2000);
                
                plusPos = 0;
                plusStage = 1;
                
            }, 1000); 
        }
        
        else if (plusStage == 1)
        {
            $("#game").fadeOut(1000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#game").css("background-image", "url(img/stage/town.gif)");
                
                themeforest.pause();
                themetown.play();
                musictown.play();
                
                $("#littleBoy").fadeOut(0);
                $("#leader").fadeIn(0);
                $("#game").fadeIn(2000);
                $("#healthBar").fadeIn(2000);
                $("#energyBar").fadeIn(2000);
                
                plusPos = 0;
                plusStage = 2;
                stageOne = false;
                
            }, 1000);
        }
        
        else if (plusStage == 2)
        {
            $("#game").fadeOut(2000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                //Positions
                if (plusPos > 0)
                {
                    $("#naruto").animate({marginLeft: '-=300px'}, 1);
                }
                
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#naruto img").attr("src", "img/naruto_standing1.gif");
                
                if ($(window).width() < 700) 
                {
                    $("#leader").css("left","400px");
                }
                else 
                {
                    $("#leader").css("left","800px");
                }
                
                $("#game").css("background-image", "url(img/stage/templeday.gif)");
                
                //Music
                run.pause();
                themetown.pause();
                musictown.pause();
                musictemple.play();
                
                $("#game").fadeIn(4000);
                $("#healthBar").fadeIn(4000);
                $("#energyBar").fadeIn(4000);
                
                plusPos = 0;
                plusStage = 3;
                stageOne = false;
                
            }, 2000);
        }
        
        else if (plusStage == 3)
        {
            $("#game").fadeOut(1000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#game").css("background-image", "url(img/stage/towncentre.gif)");
                
                themetown.play();
                musictown2.play();
                musictemple.pause();
                
                $("#dog").fadeIn(0);
                $("#leader").fadeOut(0);
                
                $("#game").fadeIn(2000);
                $("#healthBar").fadeIn(2000);
                $("#energyBar").fadeIn(2000);
                
                
                plusPos = 0;
                plusStage = 4;
                stageOne = false;
                tuto        = 3;
                
            }, 1000);
        }
        
        else if (plusStage == 4)
        {
            $("#game").fadeOut(1000);
            $("#dog").fadeOut(1000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#game").css("background-image", "url(img/stage/townout.gif)");
                
                themetown.pause();
                musictown2.pause();
                nighttheme.play();
                
                $("#dog").fadeIn(0);
                
                $("#game").fadeIn(2000);
                $("#healthBar").fadeIn(2000);
                $("#energyBar").fadeIn(2000);
                
                
                plusPos     = 0;
                plusStage   = 5;
                stageOne    = false;  
                
            }, 1000);
        }
        
        else if (plusStage == 5)
        {
            $("#game").fadeOut(1000);
            $("#healthBar").fadeOut(1000);
            $("#energyBar").fadeOut(1000);
            
            setTimeout(function()
            {   
                $("#naruto").css('left', 35 + 'px');
                $(document).scrollLeft(0);
                $("#game").css("background-image", "url(img/stage/townrain.gif)");
                
                themeforest.pause();
                nighttheme.pause();
                raintheme.play();
                
                $("#dog").fadeOut(0);
                
                $("#game").fadeIn(2000);
                $("#healthBar").fadeIn(2000);
                $("#energyBar").fadeIn(2000);
                 
                plusPos = 0;
                plusStage = 6;
                stageOne = false;
                
            }, 1000);
        }
        
    }
    
    function collision(xpos, ypos, xposE, yposE)
    {
        var narutoPos       =   {x:         xpos,   
                                 y:         ypos, 
                                 width:     $("#naruto").width(), 
                                 height:    $("#naruto").height()}
        
        var evilPos         =   {x:         xposE, 
                                 y:         yposE, 
                                 width:     $("#evil").width(), 
                                 height:    $("#evil").height()}
        
        var found           =   false;
        
        if(!found)
        {
            found = !(  ((narutoPos.y + narutoPos.height) < (evilPos.y))  ||  (narutoPos.y > (evilPos.y + evilPos.height)) ||
                        ((narutoPos.x + narutoPos.width)  < (evilPos.x - 50))  ||  (narutoPos.x > ((evilPos.x - 50) + (evilPos.width))));
        }
   
        return found;
    }
    
    function collision2(xpos, ypos, xposE, yposE)
    {
        var narutoPos       =   {x:         xpos,   
                                 y:         ypos, 
                                 width:     $("#naruto").width(), 
                                 height:    $("#naruto").height()}
        
        var evilPos         =   {x:         xposE, 
                                 y:         yposE, 
                                 width:     $("#evil").width(), 
                                 height:    $("#evil").height()}
        
        var found           =   false;
        
        if(!found)
        {
            
            found = !(  ((narutoPos.y + narutoPos.height) < (evilPos.y))  ||  (narutoPos.y > (evilPos.y + evilPos.height)) ||
                        ((narutoPos.x + narutoPos.width)  < (evilPos.x - 50))  ||  (narutoPos.x > ((evilPos.x - 50) + (evilPos.width))));
        }
   
        return found;
    }
        
    function collision3(xpos, ypos, xposE, yposE)
    {
        var narutoPos       =   {x:         xpos,   
                                 y:         ypos, 
                                 width:     $("#naruto").width(), 
                                 height:    $("#naruto").height()}
        
        var evilPos         =   {x:         xposE, 
                                 y:         yposE, 
                                 width:     $("#heart").width(), 
                                 height:    $("#heart").height()}
        
        var found           =   false;
        
        if(!found)
        {
            
            found = !(  ((narutoPos.y + narutoPos.height) < (evilPos.y))  ||  (narutoPos.y > (evilPos.y + evilPos.height)) ||
                        ((narutoPos.x + narutoPos.width)  < (evilPos.x))  ||  (narutoPos.x > ((evilPos.x) + (evilPos.width))));
        }
   
        return found;
    }
    
    function power()
    {
        if (powerPlus >= 3)
        {
            $("#energyBar").attr("src", "img/energy3.png");
            powerPlus = 3;
        }
        
        if (powerPlus == 2)
        {
            $("#energyBar").attr("src", "img/energy2.png");
        }
        
        if (powerPlus == 1)
        {
            $("#energyBar").attr("src", "img/energy1.png");
        }
        
        if (powerPlus <= 0)
        {
            $("#energyBar").attr("src", "img/energy0.png");
            powerPlus = 0;
        }
    }
    
    function health() // HEALTH + LOSE OPTIONS
    {
        if (healthPlus >= 5)
        {
            $("#healthBar").attr("src", "img/health5.png");
            powerPlus = 5;
        }
        
        if (healthPlus == 4)
        {
            $("#healthBar").attr("src", "img/health4.png");
            heartReplace();
        }
        
        if (healthPlus == 3)
        {
            $("#healthBar").attr("src", "img/health3.png");
            heartReplace();
        }
        
        if (healthPlus == 2)
        {
            clearInterval(intervalHeart);
            clearInterval(intervalH1);
            heartBeat.pause();
            $("#healthBar").attr("src", "img/health2.png");
            heartReplace();
            
        }
        
        if (healthPlus == 1)
        {
            heartBeat.play();
            $("#healthBar").attr("src", "img/health1.png");
            intervalHeart = setInterval(function()
            {
                $("#healthBar").attr("src", "img/health0.png");
                intervalH1 = setTimeout(function(){$("#healthBar").attr("src", "img/health1.png");},250);
                
            },500);
            
            heartReplace();
        }
        
        if (healthPlus <= 0)
        {
            
            /* ************************* YOU LOSE ************************* */
            $("#healthBar").attr("src", "img/health0.png");
            $("#naruto").fadeOut(2000);
            
            
            
            //MUSIC
            gameoverSound.play();
            evilWin.play();
            evilmusic.pause();
            heartBeat.pause();
            evilmusic.currentTime = 0;
            raintheme.pause();
            
            // RESET VAR
            healthPlus = 0;
            moveLock = true;
            tuto = -1;
            clearInterval(intervalAtt);
            clearInterval(intervalEvil1);
            clearInterval(intervalEvil2);
            clearInterval(intervalHeart);
            clearInterval(intervalH1);
            clearInterval(intervalMobile);
            $("#game").fadeOut(10000);
            $("#healthBar").fadeOut(10000);
            $("#energyBar").fadeOut(10000);
            $("#gamePad").fadeOut(10000);
                            
            setTimeout(function() 
            {
                $("#finishMsg").html("Game Over");
                $("#finishMsg").fadeIn(5000); 
            }, 10000);
                            
            setTimeout(function() 
            {
                $("#lose").fadeIn(4000); 
            }, 16000);
            
            
            
            $("#tryAgain").click(function()
            {
                $("#naruto").fadeIn(0);
                $("#lose").fadeOut(1000);
                $("#finishMsg").fadeOut(1000);
                $("#evil").fadeOut(0);
                $("#heart").fadeOut(0);
                $("#evil img").attr("src","img/evilstart.gif");
                $("#naruto img").attr("src", "img/naruto_standing1.gif");
                
                if ($(window).width() < 700) 
                {
                    $("#evil").css({left: "800px", top: "0px"});
                }
                else 
                {
                    $("#evil").css({left: "1200px", top: "0px"});
                }
                
                
                plusStage = 5;
                evilHealth = 150;
                healthPlus = 5;
                health();
                powerPlus = 3;
                power();
                stageOne = false;
                moveLock = false;
                tuto = 3;
                
                
                nextStage();
                
                setTimeout(function() 
                {
                    $("#game").fadeIn(2000);
                    $("#healthBar").fadeIn(2000);
                    $("#energyBar").fadeIn(2000);
                    detectMobile();
                }, 5000);
                
            });
        }
    }
    
    function ifPosSame()
    {   
        if (plusPos == plusPosEvil)
        {
            plusPosEvil = plusPos;           
        }
    }
    
    function heartAdd()
    { 
        if (collision3(positie.left, positie.top, positieHeart.left, positieHeart.top))
        {
            if (healthPlus < 5)
            {
                healthPlus++;
                hearthSound.play();
            }
            $("#heart").fadeOut(0);
            health();
        }
    }
    
    function heartReplace()
    { 
            $("#heart").css("left", (randomHeart + 30) + "px");
            $("#heart").fadeIn(500);
            setTimeout(function() {randomHeart = Math.floor(Math.random() * 1500);},600);
    }
    
    function learn1()
    {
                $("#leaderText").html(""); 
                    showText("#leaderText", "Press X to use the special attack.", 0, 50);
                    leaderMmm.play();
                    tuto++;
            }
            
    function learn2()
    {
                $("#leaderText").html(""); 
                    showText("#leaderText", "Now press C to regain your energy.", 0, 50);
                    leaderMmm.play();
                    tuto++;
            }
            
    function learn3()
    {
                $("#leaderText").html(""); 
                    showText("#leaderText", "Hahahahhaha well done...", 0, 50);
                    musictemple.pause();
                    leaderGood.play();
                    tuto++;
                    
                    setTimeout(function() 
                    {
                        $("#leaderText").html(""); 
                        showText("#leaderText", "Regaining strength and goes through the back of the village, it will lead you directly to the villages destroyed by the Akatsuki. Take care of yourself...", 0, 50);
                    }, 6000);
                    
                    setTimeout(function() 
                    {
                        $("#leaderText").html(""); 
                        leaderText.fadeOut(500);
                        plusPos     = 10;
                        moveLock    = false;
                        stageOneb   = false; 
                        stageOne    = true;
                    }, 16000);
            }

});

