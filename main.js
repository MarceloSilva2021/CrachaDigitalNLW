// variaveis do Javascript: let(mutável) ou const (imutável).
        // O objeto é um grupo de propriedades e valores agrupados.

        const linksSocialMedia = {
          github: "MarceloSilva2021",
          whatsapp: "5511964535048",
          gmail: "marcelomarcolinocvc@gmail.com",
          facebook: "marcelo.marcolinodasilva",
          instagram: "marcelo.marcolinodasilva"
        }

        function changeSocialMediaLinks(){
          
          for(let li of socialLinks.children){
            const social = li.getAttribute("class")

            if(social === "whatsapp"){
              li.children[0].href = `http://wa.me/${linksSocialMedia[social]}`              
            }else if(social === "gmail"){
              li.children[0].href = `mailto:${linksSocialMedia[social]}`  
            }else{
              li.children[0].href = `http://${social}.com/${linksSocialMedia[social]}`            
            }

          }
        }

        changeSocialMediaLinks()

        function getGitHubProfileInfos(){
          const url = `https://api.github.com/users/${linksSocialMedia.github}`

          fetch(url)
          .then(response => response.json())
          .then (data => {
            username.textContent = data.name
            bio.textContent = data.bio
            usernameGithub.href = data.html_url
            profilePhoto.src = data.avatar_url
            userLogin.textContent = data.login
          })

          
        }

        getGitHubProfileInfos()
