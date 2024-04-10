<template>
    <div class="footer">
        <h4>Contact Us</h4>
        <div class="footer-inner">
            <div class="footer-section">
                <div style="font-weight: 600;" class="socials">
                    <a href="https://www.instagram.com/yasham_foundation/"><i class="fab fa-instagram" style="display: inline-block; max-width: 32px;"></i> Instagram</a>
                    <a href="https://www.facebook.com/101851225485402/posts/104813755189149/"><i class="fab fa-facebook" style="display: inline-block; max-width: 32px;"></i> Facebook</a>
                    <a href="https://www.linkedin.com/company/yasham-foundation"><i class="fab fa-linkedin" style="display: inline-block; max-width: 32px;"></i> LinkedIn</a>
                </div>
            </div>
            <div class="footer-section">
                
                <span><i class="far fa-envelope" style="display: inline-block; width: 32px; padding-bottom: 8px;"></i> yasham<wbr>foundation<wbr>@gmail<wbr>.com</span>
                <span><i class="fa fa-phone" style="display: inline-block; width: 32px;"></i> +91 9820373390</span>
            </div>
        </div>
        <div class="footer-bottom">&copy; Yasham Foundation 2023 | Developed by <a href="https://github.com/Akharote1">Aditya Kharote</a> & <a href="https://github.com/hardikg2907">Hardik Garg</a></div>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style scoped>
    .footer{
        background: var(--color-gradient);
        padding: 32px 128px;
        padding-bottom: 16px;
        padding-top:8px;
        color: #FFF;
    }
    .footer a{
        transition: all 0.25s;
        font-weight: 500;
        color: rgba(255,255,255,0.8);
    }

    .footer a:hover{
        color: #FFF;
        text-decoration: none;
    }

    .footer-section{
        width: fit-content;
        margin-right: 32px;
        flex-grow: 1;
        justify-content: center;
    }

    .footer-section span{
        margin-bottom: 8px;
        display: block;
    }

    .footer-section a{
        margin-bottom: 8px;
        display: block;
    }

    .footer-inner{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: center;
        justify-content: center;
    }

    .footer-bottom{
        border-top: solid 1px #FFFFFF40;
        padding-top: 16px;
        color: rgba(255,255,255,0.8);
        margin-top: 32px;
        text-align: center;
    }

    @media screen and (max-width: 840px){
        .footer{
            padding: 10px 48px;
        }
        .footer-inner{
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        .footer-section{
            flex-direction: row;
            align-items: center;
            gap: 10px;
            text-align: center;
        }
        .socials{
            display: flex;
            flex-direction: row;
            gap: 30px;

        }
        .far fa-envelope{
            padding-bottom: 16px;
        }
        .footer-bottom{
        border-top: solid 1px #FFFFFF40;
        padding-top: 8px;
        color: rgba(255,255,255,0.8);
        margin-top: 16px;
        text-align: center;
    }
     
      h4{
        text-align: center;
      }
    }

    @media screen and (max-width: 640px){
        .footer-inner{
            flex-direction: column;
            align-items: center;
            gap: 4px;
        }
        .footer-section{
            flex-direction: row;
            align-items: center;
            gap: 10px;
            text-align: center;
        }
        .socials{
            display: flex;
            flex-direction: row;
            gap: 30px;

        }
        .far fa-envelope{
            padding-bottom: 16px;
        }
        
    }
</style>