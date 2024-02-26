import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

const TextBox = ({ enable }) => {
    const sketchRef = useRef(null);
    let engine;
    let boxes = [];
    let colors = "FFFFFF-D9D9D9-2B8BFC".split("-").map(a => "#" + a);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('p5').then(({ default: p5 }) => {
                let { Engine, Bodies, World, Mouse, MouseConstraint } = Matter;

                const sketch = (p) => {
                    let isMobile = window.innerWidth <= 768; // 根据屏幕宽度判断是否为移动设备
                    let allSize = window.innerWidth <= 768 ? 1 : 1.2
                    p.setup = () => {

                        const canvasWidth = window.innerWidth;
                        const canvasHeight = window.innerHeight;

                        p.createCanvas(canvasWidth, canvasHeight).parent(sketchRef.current);

                        engine = Engine.create();
                        // let boxA = Bodies.rectangle(p.width / 2, 0, 15, 15);
                        let boxA = Bodies.rectangle(canvasWidth / 2, 0, 15, 15);
                        let ground1 = Bodies.rectangle(canvasWidth * 0.58, canvasHeight * 0.39, canvasWidth * 0.22, canvasHeight * 0.042, { isStatic: true });
                        let ground2 = Bodies.rectangle(canvasWidth * 0.404, canvasHeight * 0.526, canvasWidth * 0.167, canvasHeight * 0.042, { isStatic: true });
                        let ground3 = Bodies.rectangle(canvasWidth * 0.638, canvasHeight * 0.726, canvasWidth * 0.108, canvasHeight * 0.042, { isStatic: true });

                        World.add(engine.world, [boxA, ground1, ground2, ground3]);

                        // var mouse = Mouse.create(p.canvas.elt);
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
                            engine = Engine.create();
                            // let boxA = Bodies.rectangle(p.width / 2, 0, 15, 15);
                            let boxA = Bodies.rectangle(canvasWidth / 2, 0, 15, 15);
                            let ground1 = Bodies.rectangle(canvasWidth * 0.58, canvasHeight * 0.39, canvasWidth * 0.22, canvasHeight * 0.042, { isStatic: true });
                            let ground2 = Bodies.rectangle(canvasWidth * 0.404, canvasHeight * 0.526, canvasWidth * 0.167, canvasHeight * 0.042, { isStatic: true });
                            let ground3 = Bodies.rectangle(canvasWidth * 0.638, canvasHeight * 0.726, canvasWidth * 0.108, canvasHeight * 0.042, { isStatic: true });

                            World.add(engine.world, [boxA, ground1, ground2, ground3]);

                            var mouse = Mouse.create(sketchRef.current);
                            var mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
                            World.add(engine.world, mouseConstraint);

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
                        p.background("#D9D9D9");
                        for (let box of boxes) {
                            p.fill(box.color || "white");
                            p.stroke(255);
                            p.beginShape();
                            for (let vert of box.vertices) {
                                p.vertex(vert.x, vert.y);
                            }
                            p.endShape(p.CLOSE);
                        }
                    };

                    if (isMobile) {
                        p.touchMoved = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                        p.touchStarted = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                    } else {
                        p.mouseMoved = () => {
                            generateNewBox(p.mouseX, p.mouseY);
                        };
                    }

                    function generateNewBox(x, y) {
                        let boxA = Bodies.rectangle(x, y, 15, 15);
                        boxA.color = p.random(colors);
                        boxes.push(boxA);
                        Matter.World.add(engine.world, boxA);
                    }
                };
                new p5(sketch, sketchRef.current);
            });
        }
    }, []);

    return <div ref={sketchRef} className={`absolute top-0 -left-2 z-[1] ${enable ? '' : 'hidden'}`}></div>;
};

export default TextBox;
