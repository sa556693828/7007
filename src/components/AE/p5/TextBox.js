import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';

const TextBox = () => {
    const sketchRef = useRef(null);
    let engine;
    let boxes = [];
    let colors = "FFFFFF-D9D9D9-2B8BFC".split("-").map(a => "#" + a);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            import('p5').then(({ default: p5 }) => {
                let { Engine, Bodies, World, Mouse, MouseConstraint } = Matter;

                const sketch = (p) => {
                    p.setup = () => {
                        p.createCanvas(3000, 900);

                        engine = Engine.create();
                        let boxA = Bodies.rectangle(p.width / 2, 0, 15, 15);
                        let ground1 = Bodies.rectangle(1740, 353, 668, 38, { isStatic: true });
                        let ground2 = Bodies.rectangle(1212, 474, 500, 38, { isStatic: true });
                        let ground3 = Bodies.rectangle(1913, 654, 324, 38, { isStatic: true });

                        World.add(engine.world, [boxA, ground1, ground2, ground3]);

                        var mouse = Mouse.create(p.canvas.elt);
                        var mouseConstraint = MouseConstraint.create(engine, { mouse: mouse });
                        World.add(engine.world, mouseConstraint);

                        Matter.Runner.run(engine);
                    };

                    p.draw = () => {
                        p.background("#FFF");
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

                    p.mouseMoved = () => {
                        generateNewBox(p.mouseX, p.mouseY);
                    };

                    function generateNewBox(x, y) {
                        let sz = p.random([90, 120, 150]);
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

    return <div ref={sketchRef}></div>;
};

export default TextBox;
