// script.js (Full Content, No Answer Version)

document.addEventListener('DOMContentLoaded', () => {
    // 1. กำหนดข้อมูลบทเรียนทั้งหมด (เนื้อหาเต็ม แต่ไม่มีโค้ดเฉลยแสดง)
    const lessons = [
        {
            title: "1. ทำความรู้จักกับภาษา Python",
            content: `
                <p>Python คือ <strong>ภาษาระดับสูง (High-Level Language)</strong> ซึ่งหมายความว่า синтаксис (ไวยากรณ์) ของมันถูกออกแบบมาให้ใกล้เคียงกับภาษามนุษย์ ทำให้อ่านและเขียนได้ง่ายมาก</p>
                <p>Python เป็น <strong>ภาษาแบบ Interpreter</strong> คือจะทำงานโดยการอ่านและแปลผลโค้ดทีละบรรทัด ซึ่งต่างจากภาษาอย่าง C++ หรือ Java ที่ต้องทำการ Compile (แปลผลทั้งโปรแกรม) ก่อนรัน</p>
                <p><strong>ข้อดีของ Python:</strong></p>
                <ul>
                    <li><strong>อ่านง่าย เขียนสั้น:</strong> โค้ดกระชับ ทำให้พัฒนาโปรแกรมได้รวดเร็ว</li>
                    <li><strong>ใช้งานได้หลากหลาย (General-Purpose):</strong> เหมาะสำหรับสร้างเว็บแอปพลิเคชัน, งานด้านข้อมูล (Data Science), ปัญญาประดิษฐ์ (AI), การสร้างเกม, และอื่นๆ</li>
                    <li><strong>มีไลบรารีสนับสนุนจำนวนมาก:</strong> มีเครื่องมือและโค้ดสำเร็จรูป (เรียกว่าไลบรารี หรือ Library) ให้เรียกใช้มากมาย ทำให้ไม่ต้องเขียนทุกอย่างเองตั้งแต่ต้น</li>
                </ul>
                <p>คำสั่งแรกที่เราจะเรียนรู้คือ <code>print()</code> ซึ่งเป็นฟังก์ชันสำหรับแสดงผลข้อความหรือข้อมูลต่างๆ ออกทางหน้าจอ ลองพิมพ์โค้ดในช่องด้านล่าง ให้ออกคำว่า Hello Python ดูสิครับ</p>
            `,
            codeExercise: `print("Hello Python")`
        },
        {
            title: "2. ชนิดของข้อมูล (Data Types)",
            content: `
                <p>ข้อมูลใน Python มีหลายชนิด เปรียบเสมือนสิ่งของประเภทต่างๆ ที่เราต้องจัดการให้ถูกวิธี ชนิดข้อมูลพื้นฐานที่ควรรู้จัก ได้แก่:</p>
                <ul>
                    <li><strong>String (str):</strong> คือข้อมูลประเภท "ข้อความ" จะต้องอยู่ภายในเครื่องหมายคำพูดเดี่ยว <code>'...'</code> หรือคู่ <code>"..."</code> เสมอ <br><em>ตัวอย่าง:</em> <code>"สวัสดีครับ"</code>, <code>'Python is fun'</code></li>
                    <li><strong>Integer (int):</strong> คือ "จำนวนเต็ม" ทั้งบวก, ลบ, และศูนย์ ไม่มีจุดทศนิยม<br><em>ตัวอย่าง:</em> <code>10</code>, <code>-55</code>, <code>0</code></li>
                    <li><strong>Float (float):</strong> คือ "จำนวนจริง" หรือตัวเลขที่มีจุดทศนิยม ใช้สำหรับข้อมูลที่ต้องการความละเอียดสูง<br><em>ตัวอย่าง:</em> <code>3.14</code>, <code>-0.5</code>, <code>99.99</code></li>
                    <li><strong>Boolean (bool):</strong> คือ "ค่าความจริง" มีเพียง 2 ค่าเท่านั้น คือ <code>True</code> (จริง) และ <code>False</code> (เท็จ) มีบทบาทสำคัญอย่างยิ่งในการสร้างเงื่อนไข<br><em>ตัวอย่าง:</em> <code>is_active = True</code></li>
                </ul>
                <p>เราสามารถใช้ฟังก์ชัน <code>type()</code> เพื่อตรวจสอบชนิดของข้อมูลได้ ลองเขียนโค้ดเพื่อสร้างตัวแปรชื่อ <code>pi_value</code> เก็บค่า <code>3.14</code> แล้วพิมพ์ชนิดของตัวแปรนั้นออกมาดูครับ</p>
            `,
            codeExercise: `pi_value = 3.14\nprint(type(pi_value))`
        },
        {
            title: "3. การแสดงผล (Output)",
            content: `
                <p>เราใช้คำสั่ง <code>print()</code> เพื่อแสดงผลข้อมูลออกทางหน้าจอ ซึ่งเป็นเครื่องมือสำคัญในการตรวจสอบการทำงานของโปรแกรม</p>
                <h5>การแสดงผลหลายค่าพร้อมกัน</h5>
                <p>เราสามารถใส่ข้อมูลหลายๆ ค่าคั่นด้วยเครื่องหมายจุลภาค (comma <code>,</code>) และ <code>print()</code> จะเว้นวรรคให้โดยอัตโนมัติ</p>
                <h5>การแสดงผลแบบจัดรูปแบบ (f-string)</h5>
                <p>วิธีที่ทันสมัยและสะดวกที่สุดในการผสมข้อความกับค่าในตัวแปรคือการใช้ <strong>f-string</strong> โดยการเติมตัว <code>f</code> ไว้หน้าเครื่องหมายคำพูด และใส่ชื่อตัวแปรไว้ในวงเล็บปีกกา <code>{...}</code></p>
                <p>ลองฝึกโดยสร้างตัวแปร <code>name = "สมชาย"</code> และ <code>age = 30</code> แล้วใช้ f-string พิมพ์ข้อความว่า "สวัสดีครับ ผมชื่อ สมชาย และผมอายุ 30 ปี" ออกมา</p>
            `,
            codeExercise: `name = "สมชาย"\nage = 30\nprint(f"สวัสดีครับ ผมชื่อ {name} และผมอายุ {age} ปี")`
        },
        {
            title: "4. การรับข้อมูล (Input)",
            content: `
                <p>โปรแกรมที่ดีควรมีการโต้ตอบกับผู้ใช้ได้ เราใช้ฟังก์ชัน <code>input()</code> เพื่อรับข้อมูลจากคีย์บอร์ด</p>
                <p><strong>ข้อควรจำที่สำคัญมาก:</strong> ฟังก์ชัน <code>input()</code> จะรับค่าทุกอย่างเข้ามาเป็นชนิดข้อมูล <strong>String (ข้อความ)</strong> เสมอ!</p>
                <p>ดังนั้น หากเราต้องการนำค่าที่รับมาไปคำนวณทางคณิตศาสตร์ เราต้องทำการ "แปลงชนิดข้อมูล" (Type Casting) ก่อน โดยใช้ฟังก์ชัน เช่น <code>int()</code> เพื่อแปลงเป็นจำนวนเต็ม หรือ <code>float()</code> เพื่อแปลงเป็นทศนิยม</p>
                <p>ลองเขียนโปรแกรมรับค่าอายุจากผู้ใช้ (โดยมีข้อความถามว่า "กรุณาป้อนอายุของคุณ: ") แล้วนำอายุที่ได้ไปบวกอีก 5 เพื่อแสดงผลว่า "อีก 5 ปีข้างหน้า คุณจะอายุ [ผลลัพธ์] ปี"</p>
            `,
            codeExercise: `user_age = int(input("กรุณาป้อนอายุของคุณ: "))\nprint(f"อีก 5 ปีข้างหน้า คุณจะอายุ {user_age + 5} ปี")`
        },
        {
            title: "5. ตัวแปร (Variables)",
            content: `
                <p>ตัวแปรเปรียบเสมือน "กล่องที่มีป้ายชื่อ" ใช้สำหรับเก็บข้อมูลต่างๆ เพื่อนำไปใช้งานซ้ำในโปรแกรม การสร้างตัวแปรใน Python ทำได้โดยการใช้เครื่องหมายเท่ากับ (<code>=</code>) ซึ่งเรียกว่า <strong>Assignment Operator</strong></p>
                <h5>กฎการตั้งชื่อตัวแปร</h5>
                <ul>
                    <li>ต้องขึ้นต้นด้วยตัวอักษร (a-z, A-Z) หรือเครื่องหมายขีดล่าง (underscore <code>_</code>)</li>
                    <li>ห้ามขึ้นต้นด้วยตัวเลข</li>
                    <li>ประกอบด้วยตัวอักษร, ตัวเลข, และขีดล่างเท่านั้น (ห้ามมีเว้นวรรคหรือสัญลักษณ์พิเศษ)</li>
                    <li>ตัวพิมพ์เล็กและตัวพิมพ์ใหญ่มีความหมายต่างกัน (Case-Sensitive) เช่น <code>name</code> กับ <code>Name</code> ถือเป็นคนละตัวแปร</li>
                </ul>
                <p><strong>คำแนะนำ:</strong> ควรตั้งชื่อตัวแปรให้สื่อความหมาย เพื่อให้โค้ดอ่านเข้าใจง่าย เช่น ใช้ <code>user_name</code> แทน <code>x</code></p>
                <p>ลองสร้างตัวแปร 3 ตัว: <code>student_name</code> เก็บชื่อ "สมศรี", <code>score</code> เก็บเลข 88, และ <code>is_passed</code> เก็บค่า <code>True</code></p>
            `,
            codeExercise: `student_name = "สมศรี"\nscore = 88\nis_passed = True`
        },
        {
            title: "6. ตัวดำเนินการและนิพจน์",
            content: `
                <p>ตัวดำเนินการ (Operators) คือสัญลักษณ์ที่ใช้กระทำกับข้อมูล เช่น บวก ลบ เปรียบเทียบค่า</p>
                <h5>1. ตัวดำเนินการทางคณิตศาสตร์ (Arithmetic)</h5>
                <p><code>+</code> (บวก), <code>-</code> (ลบ), <code>*</code> (คูณ), <code>/</code> (หาร), <code>%</code> (หารเอาเศษ-Modulo), <code>**</code> (ยกกำลัง), <code>//</code> (หารปัดเศษทิ้ง)</p>
                <h5>2. ตัวดำเนินการเปรียบเทียบ (Comparison)</h5>
                <p><code>==</code> (เท่ากับ), <code>!=</code> (ไม่เท่ากับ), <code>></code> (มากกว่า), <code><</code> (น้อยกว่า), <code>>=</code> (มากกว่าหรือเท่ากับ), <code><=</code> (น้อยกว่าหรือเท่ากับ) <br><em>ผลลัพธ์ที่ได้จะเป็น Boolean (True หรือ False) เสมอ</em></p>
                <h5>3. ตัวดำเนินการทางตรรกศาสตร์ (Logical)</h5>
                <p><code>and</code> (และ), <code>or</code> (หรือ), <code>not</code> (ไม่)</p>
                <p>ลองเขียนโค้ดเพื่อคำนวณราคาสุทธิของสินค้า 1500 บาท ที่มีส่วนลด 10% (คือคูณด้วย 0.9) และบวกค่าส่งอีก 25 บาท จากนั้นให้พิมพ์ผลลัพธ์ว่าราคาสุทธินั้นมากกว่า 1000 หรือไม่</p>
            `,
            codeExercise: `final_price = (1500 * 0.9) + 25\nprint(final_price > 1000)`
        },
        {
            title: "7. การเขียนโปรแกรมแบบมีทางเลือก (Conditional Statements)",
            content: `
                <p>หัวใจของการเขียนโปรแกรมคือการสร้างเงื่อนไขเพื่อให้โปรแกรม "ตัดสินใจ" ได้ว่าจะทำอะไรต่อไป โดยใช้คำสั่ง <code>if</code>, <code>elif</code>, และ <code>else</code></p>
                <p><strong>โครงสร้างสำคัญ:</strong> ทุกเงื่อนไขจะต้องจบด้วยเครื่องหมายโคลอน (<code>:</code>) และโค้ดที่อยู่ภายใต้เงื่อนไขนั้นๆ จะต้องทำการ <strong>ย่อหน้า (Indentation)</strong> เข้าไป ซึ่งการย่อหน้านี้มีความสำคัญอย่างยิ่งในภาษา Python</p>
                <ul>
                    <li><code>if</code>: ใช้สำหรับตรวจสอบเงื่อนไขแรก ถ้าเป็นจริงจะทำคำสั่งภายใต้ if</li>
                    <li><code>elif</code>: (ย่อมาจาก else if) ใช้สร้างเงื่อนไขเพิ่มเติม ถ้า if แรกไม่เป็นจริง จะมาตรวจสอบเงื่อนไขของ elif ต่อไป (จะมีกี่อันก็ได้)</li>
                    <li><code>else</code>: จะทำงานก็ต่อเมื่อไม่มีเงื่อนไขใดๆ ก่อนหน้าเป็นจริงเลย</li>
                </ul>
                <p>ลองสร้างตัวแปร <code>temperature</code> ให้มีค่าเท่ากับ 28 แล้วเขียนโปรแกรมตรวจสอบสภาพอากาศ โดยถ้าอุณหภูมิมากกว่า 30 ให้พิมพ์ว่า "อากาศร้อน", ถ้าน้อยกว่า 20 ให้พิมพ์ว่า "อากาศเย็น", นอกนั้นให้พิมพ์ว่า "อากาศกำลังดี"</p>
            `,
            codeExercise: `temperature = 28\nif temperature > 30:\n    print("อากาศร้อน")\nelif temperature < 20:\n    print("อากาศเย็น")\nelse:\n    print("อากาศกำลังดี")`
        },
        {
            title: "8. การเขียนโปรแกรมแบบทำซ้ำ (Loops)",
            content: `
                <p>ลูป (Loop) คือการสั่งให้โปรแกรมทำงานบางอย่างซ้ำๆ จนกว่าจะครบตามเงื่อนไขที่กำหนด ช่วยลดการเขียนโค้ดที่ซ้ำซ้อน</p>
                <h5>for loop</h5>
                <p><code>for</code> loop เหมาะกับการทำงานซ้ำตามจำนวนรอบที่แน่นอน หรือการวนเข้าไปดูสมาชิกทุกตัวในข้อมูลที่เป็นกลุ่มก้อน (เช่น List หรือ String) เรามักใช้คู่กับ <code>range()</code> เพื่อสร้างชุดตัวเลข</p>
                <p><code>range(5)</code> จะสร้างลำดับของเลข 0, 1, 2, 3, 4 (ไม่รวม 5)</p>
                <h5>while loop</h5>
                <p><code>while</code> loop จะทำงานซ้ำไปเรื่อยๆ ตราบใดที่เงื่อนไขยังคงเป็น <code>True</code> เหมาะกับงานที่ไม่ทราบจำนวนรอบที่แน่นอน แต่ต้องระวังการเกิด "ลูปไม่รู้จบ" (Infinite Loop)</p>
                <p>ลองใช้ <code>for</code> loop และ <code>range()</code> เพื่อแสดงสูตรคูณแม่ 2 ตั้งแต่ 2x1 จนถึง 2x12</p>
            `,
            codeExercise: `for i in range(1, 13):\n    print(f"2 x {i} = {2*i}")`
        },
        {
            title: "9. โจทย์ฝึกเขียน: หาเลขคู่เลขคี่",
            content: `
                <p>ถึงเวลาทดสอบความเข้าใจกันแล้ว! ลองนำความรู้จากบทเรียนก่อนหน้ามาแก้โจทย์นี้ดูครับ</p>
                <p><strong>โจทย์:</strong> จงเขียนโปรแกรมรับค่าตัวเลขจำนวนเต็ม 1 ตัว แล้วตรวจสอบว่าเป็น "เลขคู่" (Even number) หรือ "เลขคี่" (Odd number) แล้วแสดงผลออกมา</p>
                <p><strong>คำใบ้:</strong></p>
                <ol>
                    <li>ใช้ <code>input()</code> และ <code>int()</code></li>
                    <li>ใช้ตัวดำเนินการ Modulo (<code>%</code>) เพื่อหาเศษจากการหารด้วย 2</li>
                    <li>ใช้ <code>if-else</code> ในการแสดงผล</li>
                </ol>
                <p><em>เมื่อเขียนโค้ดเสร็จแล้ว ให้พิมพ์ลงในช่องด้านล่างเพื่อตรวจคำตอบ</em></p>
            `,
            codeExercise: `number = int(input("Enter a number: "))\nif number % 2 == 0:\n    print("This is an Even number.")\nelse:\n    print("This is an Odd number.")`
        },
        {
            title: "10. โจทย์ฝึกเขียน: โปรแกรมตัดเกรด",
            content: `
                <p>โจทย์ข้อสุดท้ายสำหรับหลักสูตรพื้นฐานนี้ จะเป็นการประยุกต์ใช้เงื่อนไขที่ซับซ้อนขึ้น</p>
                <p><strong>โจทย์:</strong> จงเขียนโปรแกรมรับค่าคะแนนสอบ (0-100) แล้วแสดงผลเกรดตามเงื่อนไขต่อไปนี้:</p>
                <ul>
                    <li>80-100: เกรด A</li>
                    <li>70-79: เกรด B</li>
                    <li>60-69: เกรด C</li>
                    <li>50-59: เกรด D</li>
                    <li>ต่ำกว่า 50: เกรด F</li>
                </ul>
                <p><strong>คำใบ้:</strong> โจทย์นี้เหมาะกับการใช้โครงสร้าง <code>if-elif-else</code> ที่สุด!</p>
                <p><em>เมื่อเขียนโค้ดเสร็จแล้ว ให้พิมพ์ลงในช่องด้านล่างเพื่อตรวจคำตอบ</em></p>
            `,
            codeExercise: `score = int(input("Enter your score: "))\nif score >= 80:\n    print("Grade: A")\nelif score >= 70:\n    print("Grade: B")\nelif score >= 60:\n    print("Grade: C")\nelif score >= 50:\n    print("Grade: D")\nelse:\n    print("Grade: F")`
        }
    ];

    // ... (ส่วนที่เหลือของโค้ดเหมือนเดิมทุกประการ ไม่ต้องเปลี่ยนแปลง) ...
    const lessonTitleEl = document.getElementById('lesson-title');
    const lessonContentEl = document.getElementById('lesson-content');
    const codeInputEl = document.getElementById('code-input');
    const feedbackMessageEl = document.getElementById('feedback-message');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentLessonIndex = 0;
    function displayLesson(index) {
        const lesson = lessons[index];
        lessonTitleEl.textContent = lesson.title;
        lessonContentEl.innerHTML = lesson.content;
        codeInputEl.value = '';
        feedbackMessageEl.innerHTML = '';
        feedbackMessageEl.className = '';
        nextBtn.disabled = true;
        prevBtn.disabled = (index === 0);
        if (index === lessons.length - 1) {
            nextBtn.textContent = 'จบหลักสูตร';
        } else {
            nextBtn.textContent = 'ถัดไป >';
        }
    }
    function checkCode() {
        const normalize = (str) => str.replace(/\s/g, '');
        const userInput = normalize(codeInputEl.value);
        const correctCode = normalize(lessons[currentLessonIndex].codeExercise);
        if (userInput === correctCode) {
            feedbackMessageEl.textContent = '✅ โค้ดถูกต้อง! เยี่ยมมาก กด "ถัดไป" เพื่อเรียนต่อได้เลย';
            feedbackMessageEl.className = 'correct';
            if (currentLessonIndex < lessons.length - 1) {
                nextBtn.disabled = false;
            } else {
                nextBtn.disabled = true;
                nextBtn.textContent = '🎉 ยินดีด้วย!';
            }
        } else {
            feedbackMessageEl.textContent = '❌ โค้ดยังไม่ถูกต้อง ลองตรวจสอบการพิมพ์อีกครั้ง';
            feedbackMessageEl.className = 'incorrect';
            nextBtn.disabled = true;
        }
    }
    codeInputEl.addEventListener('input', checkCode);
    nextBtn.addEventListener('click', () => {
        if (currentLessonIndex < lessons.length - 1) {
            currentLessonIndex++;
            displayLesson(currentLessonIndex);
        }
    });
    prevBtn.addEventListener('click', () => {
        if (currentLessonIndex > 0) {
            currentLessonIndex--;
            displayLesson(currentLessonIndex);
        }
    });
    displayLesson(currentLessonIndex);
});