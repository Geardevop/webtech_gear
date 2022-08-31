let countryThai = ['ไทย', 'เวียดนาม', 'ลาว', 'มาเลย์เซีย', 'สิงคโปร', 'ฟิลิปปินส์', 'เมียนมาร์','กัมพูชา','บรูไน']
let countryEng = ['thai', 'viet' , 'lao', 'malaysia', 'singapore', 'philiphin', 'mynmar', 'cambodia' ,'brunei']



function changeLange(check){ 
    let clearDiv = document.getElementById('container')
    clearDiv.innerHTML = ''
    if (check == 'true'){
            let labelName = document.createElement('label')
            let inputName = document.createElement('input')
            let divName = document.getElementById('container')
            labelName.innerText = 'ชื่อ:'
            divName.appendChild(labelName)
            divName.appendChild(inputName)

            let brName = document.createElement('br')
            divName.appendChild(brName)

            let labelSureName = document.createElement('label')
            let inputSureName = document.createElement('input')
            let divSurename = document.getElementById('container')
            labelSureName.innerText = 'นามสกุล:'
            divSurename.appendChild(labelSureName)
            divSurename.appendChild(inputSureName)

            let brSure = document.createElement('br')
            divName.appendChild(brSure)

            let labelCountry = document.createElement('label')
            labelCountry.innerText = 'ประเทศ:'
            let inputCountry = document.createElement('select')
            // let country = 'thai'
            // let option = document.createElement('option')
            // option.value = country
            // option.innerHTML = country
            // inputCountry.appendChild(option)
            for(let i = 0; i < countryThai.length; i++){
                const country = countryThai[i]
                let option = document.createElement('option')
                option.value = country 
                option.innerHTML = country
                inputCountry.appendChild(option)
            }

            let divCountry = document.getElementById('container')
            divCountry.appendChild(labelCountry)
            divCountry.appendChild(inputCountry)
            let brCountry = document.createElement('br')
            divCountry.appendChild(brCountry)
            const btn = document.createElement('button')
            btn.innerHTML = "เปลี่่ยนเป็นอังกฤษ"
            btn.addEventListener('click',()=>{
                if(check === 'true'){
                    changeLange('false')
                }
                else{
                    changeLange('true')
                }
                console.log(check)

            })
            divCountry.appendChild(btn)

    }
    else if (check == 'false'){
        let labelName = document.createElement('label')
            let inputName = document.createElement('input')
            let divName = document.getElementById('container')
            labelName.innerText = 'Name:'
            divName.appendChild(labelName)
            divName.appendChild(inputName)

            let brName = document.createElement('br')
            divName.appendChild(brName)

            let labelSureName = document.createElement('label')
            let inputSureName = document.createElement('input')
            let divSurename = document.getElementById('container')
            labelSureName.innerText = 'SureName:'
            divSurename.appendChild(labelSureName)
            divSurename.appendChild(inputSureName)

            let brSure = document.createElement('br')
            divName.appendChild(brSure)

            let labelCountry = document.createElement('label')
            labelCountry.innerText = 'Country:'
            let inputCountry = document.createElement('select')
            // let country = 'thai'
            // let option = document.createElement('option')
            // option.value = country
            // option.innerHTML = country
            // inputCountry.appendChild(option)
            for(let i = 0; i < countryThai.length; i++){
                const country = countryEng[i]
                let option = document.createElement('option')
                option.value = country 
                option.innerHTML = country
                inputCountry.appendChild(option)
            }

            let divCountry = document.getElementById('container')
            divCountry.appendChild(labelCountry)
            divCountry.appendChild(inputCountry)
            let brCountry = document.createElement('br')
            divCountry.appendChild(brCountry)
            const btn = document.createElement('button')
            btn.innerHTML = "Chang to thai"
            btn.addEventListener('click',()=>{
                if(check === 'true'){
                    changeLange('false')
                }
                else{
                    changeLange('true')
                }
            })
            divCountry.appendChild(btn)
        
    }
}

changeLange('false')