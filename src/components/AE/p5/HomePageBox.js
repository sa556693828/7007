import React, { useRef, useEffect, } from 'react';
import Matter from 'matter-js';

const HomePageBox = ({ enable }) => {
    const sketchRef = useRef(null);
    let engine;
    let boxes = [];
    let colors = "2B8BFC-000000-BCBCBC-2B8BFC-000000".split("-").map(a => "#" + a);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('p5').then(({ default: p5 }) => {
                let { Engine, Bodies, World, Mouse, MouseConstraint } = Matter;

                const sketch = (p) => {
                    let isMobile = window.innerWidth <= 768; // 根据屏幕宽度判断是否为移动设备
                    let allSize = window.innerWidth <= 768 ? 1 : 1.5

                    p.setup = () => {
                        p.createCanvas(window.innerWidth, window.innerHeight).parent(sketchRef.current);
                        p.background(100);

                        engine = Engine.create();
                        let ground = Bodies.rectangle(p.width / 2, p.height + 30 * allSize, p.width, 60 * allSize, { isStatic: true });
                        World.add(engine.world, ground);
                        var mouse = Mouse.create(sketchRef.current);
                        var mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
                        World.add(engine.world, mouseConstraint);

                        Matter.Runner.run(engine);

                        window.addEventListener('resize', () => {
                            isMobile = window.innerWidth <= 768;
                            allSize = window.innerWidth <= 768 ? 1 : 1.5
                            const canvasWidth = window.innerWidth;
                            const canvasHeight = window.innerHeight;
                            p.resizeCanvas(canvasWidth, canvasHeight); // 調整畫布大小
                            World.clear(engine.world);
                            boxes = [];
                            // 重新创建引擎和鼠标约束
                            engine = Engine.create();
                            let ground = Bodies.rectangle(p.width / 2, p.height + 30 * allSize, p.width, 60 * allSize, { isStatic: true });
                            World.add(engine.world, ground);
                            var mouse = Mouse.create(sketchRef.current);
                            var mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
                            World.add(engine.world, mouseConstraint);

                            // 重新运行引擎
                            Matter.Runner.run(engine);
                        });

                    };
                    p.mouseWheel = function (event) {
                        // 取消P5画布的默认滚动行为
                        event.preventDefault();

                        // 获取滚轮事件的增量
                        let delta = event.deltaY;

                        // 调整整个网页的滚动位置
                        window.scrollBy(0, delta);
                    };
                    p.draw = () => {
                        p.background('#D9D9D9');
                        for (let box of boxes) {
                            p.fill(box.color || "white");
                            let sz = box.sz;
                            p.stroke(255);
                            p.strokeWeight(1);
                            p.beginShape();
                            for (let vert of box.vertices) {
                                p.vertex(vert.x, vert.y);
                            }
                            p.endShape(p.CLOSE);

                            p.push();
                            p.translate(box.position.x, box.position.y);
                            p.rotate(box.angle);
                            if (sz) {
                                p.fill(255);
                                p.noStroke();
                                p.textAlign(p.CENTER);
                                p.textSize(12 * allSize);
                                p.textStyle(p.BOLD);
                                p.text(box.char, 0, 4 * allSize);
                            }
                            p.pop();
                        }
                    };

                    if (isMobile) {
                        // 如果是移动设备，使用 touchMoved 事件
                        p.touchMoved = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                        p.touchStarted = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                    } else {
                        // 如果是桌面设备，使用 mouseMoved 事件
                        p.mouseMoved = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                    }

                    function generateNewBox(x, y) {
                        let sz = p.random([90, 120, 150]) * allSize
                        let boxA = Bodies?.rectangle(x = p.mouseX, y = p.mouseY - 10 * allSize, sz, 30 * allSize, { chamfer: { radius: 15 * allSize } })
                        boxA.color = p.random(colors);
                        boxA.sz = sz;
                        boxA.char = p.random(["AI MODEL", "AIGC NFT", "EIP-7007", "ON-CHAIN", "CREATOR", "TOKENS"]);
                        // p.textSize(36);

                        boxes.push(boxA);
                        Matter.World.add(engine.world, boxA);
                    }
                };
                new p5(sketch);
            });
        }
        return () => {
            window.removeEventListener('resize', () => {
                const canvasWidth = window.innerWidth;
                const canvasHeight = window.innerHeight;
                p.resizeCanvas(canvasWidth, canvasHeight); // 調整畫布大小
            });
        };
    }, []);

    return (
        <div ref={sketchRef} className={`absolute top-0 z-[5] left-0 ${enable ? '' : 'hidden'}`}></div>
    );
};

export default HomePageBox;
