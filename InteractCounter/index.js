let num = 0;

const Value = document.querySelector(".Value");
const btns = document.querySelectorAll(".btn");

console.log(btns)

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const styles = event.currentTarget.classList

        if(styles.contains("btn-danger")){
            if(num <= 0){
                num = 0
            }else{
            num--;
            }
        }else if(styles.contains("btn-success")){
            num++;
        }else{
            num = 0;
        }

        Value.textContent = num;

        if(num > 0){
            Value.style.color = "green"
        }else{
            Value.style.color = "black"
        }
    })
})