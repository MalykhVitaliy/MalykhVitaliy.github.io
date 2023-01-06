<template>
    <section class="cases" id="cases">
        <div class="container">
            <h2 class="title">Cases</h2>

            <div class="cases-grid">
                <div class="cases-item animate" v-for="(item, key) in cases" :key="`key_${key}`">
                    <div class="cases-img" @mousemove="animationBtn" @mouseleave="animationBtnReset">
                        <img alt="Vue logo" :src="item.images[0]">
                        <div class="animation-btn" @click="modalOpen(item)">Open case</div>
                    </div>

                    <h3 class="subtitle" v-html="item.title"/>

                    <p class="text" v-html="item.text"/>
                </div>
            </div>

            <ModalComponent ref="modal"/>
        </div>
    </section>
</template>

<script>
import ModalComponent from "@/components/ModalComponent.vue";

export default {
    name: "CasesComponent",
    components: {
        ModalComponent
    },
    data: () => ({
        cases: [
            {
                id: 1,
                title: 'BespokeMoving',
                text: 'Moving Solutions Company // USA',
                link: 'https://bespokemoving.net/',
                images: [
                    require('@/assets/images/cases/BespokeMoving_1.jpg'),
                    require('@/assets/images/cases/BespokeMoving_2.jpg'),
                    require('@/assets/images/cases/BespokeMoving_3.jpg'),
                    require('@/assets/images/cases/BespokeMoving_4.jpg'),
                ],
                skills: [
                    {
                        title: 'CMS Customization Deliverables',
                        text: [
                            'WordPress Plugin'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Full Stack Development Skills',
                        text: [
                            'jQuery'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'Java Script',
                            'PHP'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },
            {
                id: 2,
                title: 'Chelsea',
                text: 'furniture online store // uk',
                link: 'http://chelseaupholstery.co.uk/',
                images: [
                    require('@/assets/images/cases/Chelsea_1.jpg'),
                    require('@/assets/images/cases/Chelsea_2.jpg'),
                    require('@/assets/images/cases/Chelsea_3.jpg'),
                    require('@/assets/images/cases/Chelsea_4.jpg'),
                    require('@/assets/images/cases/Chelsea_5.jpg'),
                    require('@/assets/images/cases/Chelsea_6.jpg'),
                    require('@/assets/images/cases/Chelsea_7.jpg'),
                    require('@/assets/images/cases/Chelsea_8.jpg'),
                    require('@/assets/images/cases/Chelsea_9.jpg'),
                ],
                skills: [
                    {
                        title: 'CMS Customization Deliverables',
                        text: [
                            'WordPress Plugin'
                        ]
                    },
                    {
                        title: 'CMS Development Deliverables',
                        text: [
                            'Ecommerce Website'
                        ]
                    },
                    {
                        title: 'eCommerce Platforms',
                        text: [
                            'WooCommerce'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },
            {
                id: 3,
                title: 'Balanciaga',
                text: 'Online Clothing Store',
                link: 'http://boutique.rctest.xyz/',
                images: [
                    require('@/assets/images/cases/Balenciaga_1.jpg'),
                    require('@/assets/images/cases/Balenciaga_2.jpg'),
                    require('@/assets/images/cases/Balenciaga_3.jpg'),
                    require('@/assets/images/cases/Balenciaga_4.jpg'),
                    require('@/assets/images/cases/Balenciaga_5.jpg'),
                    require('@/assets/images/cases/Balenciaga_6.jpg'),
                    require('@/assets/images/cases/Balenciaga_7.jpg'),
                ],
                skills: [
                    {
                        title: 'CMS Development Deliverables',
                        text: [
                            'Ecommerce Website'
                        ]
                    },
                    {
                        title: 'eCommerce Development Skills',
                        text: [
                            'Laravel'
                        ]
                    },
                    {
                        title: 'Full Stack Development Deliverables',
                        text: [
                            'Web Development'
                        ]
                    },
                    {
                        title: 'Full Stack Development Skills',
                        text: [
                            'Vue.js'
                        ]
                    },
                    {
                        title: 'Graphic Design Deliverables',
                        text: [
                            'Clothing'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'PHP'
                        ]
                    }
                ]
            },
            {
                id: 4,
                title: 'Vodalove',
                text: 'Distilled Water Shop // Ukraine',
                link: 'https://voda.love/',
                images: [
                    require('@/assets/images/cases/VodaLove_1.jpg'),
                    require('@/assets/images/cases/VodaLove_2.jpg'),
                    require('@/assets/images/cases/VodaLove_3.jpg'),
                    require('@/assets/images/cases/VodaLove_4.jpg'),
                    require('@/assets/images/cases/VodaLove_5.jpg'),
                    require('@/assets/images/cases/VodaLove_6.jpg'),
                    require('@/assets/images/cases/VodaLove_7.jpg'),
                ],
                skills: [
                    {
                        title: 'CMS Customization Deliverables',
                        text: [
                            'WordPress Plugin'
                        ]
                    },
                    {
                        title: 'CMS Development Deliverables',
                        text: [
                            'Ecommerce Website'
                        ]
                    },
                    {
                        title: 'eCommerce Platforms',
                        text: [
                            'WooCommerce'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'PHP'
                        ]
                    },
                    {
                        title: 'Virtual Assistance Focus',
                        text: [
                            'Ecommerce'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },
            {
                id: 5,
                title: 'TinyLittleSleepers',
                text: 'Sleep Coach for Babies // Israel',
                link: 'https://tinylittlesleepers.co.il/',
                images: [
                    require('@/assets/images/cases/TinyLittleSleepers_1.jpg'),
                    require('@/assets/images/cases/TinyLittleSleepers_2.jpg'),
                    require('@/assets/images/cases/TinyLittleSleepers_3.jpg'),
                    require('@/assets/images/cases/TinyLittleSleepers_4.jpg'),
                    require('@/assets/images/cases/TinyLittleSleepers_5.jpg'),
                    require('@/assets/images/cases/TinyLittleSleepers_6.jpg'),
                ],
                skills: [
                    {
                        title: 'Business Size',
                        text: [
                            'Business with 1-9 EmployeesBusiness with 10-99 Employees'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'JavaScript'
                        ]
                    },
                    {
                        title: 'SEO Tools',
                        text: [
                            'WordPress SEO Plugins'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: 'AviaService',
                text: 'Air Cargo Services',
                link: 'https://aviaservice.su/en/services/',
                images: [
                    require('@/assets/images/cases/AviaService_1.jpg'),
                    require('@/assets/images/cases/AviaService_2.jpg'),
                    require('@/assets/images/cases/AviaService_3.jpg'),
                    require('@/assets/images/cases/AviaService_4.jpg'),
                    require('@/assets/images/cases/AviaService_5.jpg'),
                    require('@/assets/images/cases/AviaService_6.jpg'),
                    require('@/assets/images/cases/AviaService_7.jpg'),
                    require('@/assets/images/cases/AviaService_8.jpg'),
                ],
                skills: [
                    {
                        title: 'CMS Customization Deliverables',
                        text: [
                            'WordPress Plugin'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'Web Design',
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Product Management Skills',
                        text: [
                            'UX & UI'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'PHP'
                        ]
                    },
                    {
                        title: 'UX/UI Design Skills',
                        text: [
                            'UI/UX Prototyping',
                            'Design Mockup'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },
            {
                id: 7,
                title: 'remdok',
                text: 'Building Renovation Services // Ukraine',
                link: 'https://remdok.com.ua/',
                images: [
                    require('@/assets/images/cases/Remdok_1.jpg'),
                    require('@/assets/images/cases/Remdok_2.jpg'),
                    require('@/assets/images/cases/Remdok_3.jpg'),
                    require('@/assets/images/cases/Remdok_4.jpg'),
                    require('@/assets/images/cases/Remdok_5.jpg'),
                    require('@/assets/images/cases/Remdok_6.jpg'),
                ],
                skills: [
                    {
                        title: 'Crypto Wallet Operating Systems',
                        text: [
                            'Android',
                            'macOS'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Front-End Development Skills',
                        text: [
                            'Bootstrap'
                        ]
                    },
                    {
                        title: 'Full Stack Development Skills',
                        text: [
                            'Git'
                        ]
                    },
                    {
                        title: 'Industry Experience',
                        text: [
                            'Construction'
                        ]
                    },
                    {
                        title: 'Product Management Tools',
                        text: [
                            'GitLab'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'JavaScript',
                            'CSS',
                            'HTML',
                            'HTML5',
                            'PHP'
                        ]
                    },
                    {
                        title: 'Testing Types',
                        text: [
                            'Web Testing'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                    {
                        title: 'Written Languages',
                        text: [
                            'Ukrainian'
                        ]
                    },
                ]
            },
            {
                id: 8,
                title: 'Get Education',
                text: 'Online Learning Platform // Kazakhstan',
                link: 'https://get-edu-dev.rctest.xyz',
                images: [
                    require('@/assets/images/cases/Get Education_1.jpg'),
                    require('@/assets/images/cases/Get Education_2.jpg'),
                    require('@/assets/images/cases/Get Education_3.jpg'),
                    require('@/assets/images/cases/Get Education_4.jpg'),
                    require('@/assets/images/cases/Get Education_5.jpg'),
                ],
                skills: [
                    {
                        title: 'Cartoons & Comics Genre',
                        text: [
                            'Educational'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Voice Talent Deliverables',
                        text: [
                            'Education Presentation'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },
            {
                id: 9,
                title: 'Odesa Regional State Administration',
                text: 'Cultural Department // Ukraine',
                link: 'https://dep-cult-dev.rctest.xyz',
                images: [
                    require('@/assets/images/cases/Odesa Regional_1.jpg'),
                    require('@/assets/images/cases/Odesa Regional_2.jpg'),
                    require('@/assets/images/cases/Odesa Regional_3.jpg'),
                    require('@/assets/images/cases/Odesa Regional_4.jpg'),
                    require('@/assets/images/cases/Odesa Regional_5.jpg')
                ],
                skills: [
                    {
                        title: 'App Features',
                        text: [
                            'Map Integration'
                        ]
                    },
                    {
                        title: 'CMS Customization Deliverables',
                        text: [
                            'WordPress Plugin'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'JavaScript'
                        ]
                    },
                    {
                        title: 'Search Engine Marketing Tools',
                        text: [
                            'Google My Business'
                        ]
                    },
                    {
                        title: 'Website Builders & CMS Platforms',
                        text: [
                            'WordPress'
                        ]
                    },
                ]
            },






            {
                id: 10,
                title: 'Furniture PQ',
                text: 'Furniture Online Shop',
                link: 'http://furniture.rctest.xyz/',
                images: [
                    require('@/assets/images/cases/Furniture PQ_1.jpg'),
                    require('@/assets/images/cases/Furniture PQ_2.jpg'),
                    require('@/assets/images/cases/Furniture PQ_3.jpg'),
                    require('@/assets/images/cases/Furniture PQ_4.jpg'),
                    require('@/assets/images/cases/Furniture PQ_5.jpg')
                ],
                skills: [
                    {
                        title: 'eCommerce Development Skills',
                        text: [
                            'Laravel'
                        ]
                    },
                    {
                        title: 'Full Stack Development Skills',
                        text: [
                            'Vue.js'
                        ]
                    },
                    {
                        title: 'Product Management Skills',
                        text: [
                            'UX & UI'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'PHP'
                        ]
                    },
                ]
            },
            {
                id: 11,
                title: 'Juces of Ukraine',
                text: 'Manufacturer\'s Website // Ukraine',
                link: 'https://sokiukrainy.com/',
                images: [
                    require('@/assets/images/cases/Juces of Ukraine_1.jpg'),
                    require('@/assets/images/cases/Juces of Ukraine_2.jpg'),
                    require('@/assets/images/cases/Juces of Ukraine_3.jpg'),
                    require('@/assets/images/cases/Juces of Ukraine_4.jpg'),
                    require('@/assets/images/cases/Juces of Ukraine_5.jpg')
                ],
                skills: [
                    {
                        title: 'CMS Development Deliverables',
                        text: [
                            'Website'
                        ]
                    },
                    {
                        title: 'Front-End Development Deliverables',
                        text: [
                            'WordPress Development'
                        ]
                    },
                    {
                        title: 'Product Management Skills',
                        text: [
                            'UX & UI'
                        ]
                    },
                    {
                        title: 'Programming Languages',
                        text: [
                            'JavaScript'
                        ]
                    },
                    {
                        title: 'UX/UI Design Software',
                        text: [
                            'Figma'
                        ]
                    },
                ]
            },
        ]
    }),
    mounted() {
        document.addEventListener("scroll", this.isObserveSection);
    },
    methods: {
        modalOpen(item) {
            this.$refs.modal.modalOpen(item);
        },
        isObserveSection() {
            let casesItem = document.querySelectorAll(".cases-item"),
                searchForSection = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.remove('animate');
                            }
                        });
                    },
                    {
                        threshold: 0.1,
                        root: null,
                        rootMargin: "0px",
                    }
                );

            //init
            [...casesItem].forEach((item) => {
                searchForSection.observe(item);
            });
        },
        animationBtn(e) {
            let target = e.target.closest('.cases-img')
            let btn = target.querySelector('.animation-btn');
            let rect = target.getBoundingClientRect();
            let middle = target.offsetWidth / 2;

            let x = e.clientX - rect.left;
            let y = e.clientY - rect.top;
            let rotate = 0;

            if(x > middle) {
                rotate = ((x / 100) - 3);
            } else {
                rotate = -(( (target.offsetWidth - x) / 100) - 3);
            }

            window.requestAnimationFrame(()=>{
                btn.style.left = x + 'px';
                btn.style.top = y + 'px';
                btn.style.rotate = rotate + 'deg';
            });
        },
        animationBtnReset(e) {
            let target = e.target.closest('.cases-img')
            let btn = target.querySelector('.animation-btn');

            window.requestAnimationFrame(()=>{
                btn.style.left = '50%';
                btn.style.top = '50%';
            });
        }
    }
}
</script>

<style scoped lang="scss">
.cases {
    padding-top: 80px;
    padding-bottom: 150px;
}

.title {
    text-align: center;
}

.cases-grid {
    margin-top: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 50px 40px;
}

.cases-item {
    transition: 1s;

    &:nth-child(odd) {
        transition: .6s;
    }

    &.animate {
        transform: translateY(300px);
        opacity: 0;
    }

    @include hovers {
        .animation-btn {
            opacity: 1;
            transform: translate(-50%, -50%);
        }

        .subtitle {
            text-decoration: underline;
            text-decoration-color: rgba(111, 218, 68, 1);
        }
    }

    .subtitle {
        position: relative;
        margin-top: 30px;
        width: fit-content;
        text-decoration-color: rgba(111, 218, 68, 0);
        transition: text-decoration-color .3s;
    }

    .text {
        text-transform: uppercase;
    }

    img {
        width: 100%;
        aspect-ratio: 3/2;
        border-radius: 20px;
    }
}

.cases-img {
    position: relative;
    overflow: hidden;
}

.animation-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    will-change: transform;
    transform-style: preserve-3d;
    transform: translate(-50%, -50%);
    height: 120px;
    width: 120px;
    min-width: 120px;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0 25px;
    text-align: center;
    font-family: 'Gilroy', system-ui, -apple-system;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    letter-spacing: 0.02em;
    opacity: 0;
    transition: .4s linear;
    cursor: pointer;

    @include hovers {
        height: 150px;
        width: 150px;
    }
}

@include breakpoint(extra-small) {
    .cases {
        padding-top: 60px;
        padding-bottom: 50px;
    }
    .cases-grid {
        margin-top: 25px;
        grid-gap: 25px;
        grid-template-columns: 1fr;
    }

    .cases-item {
        transition: .8s;

        &:nth-child(odd) {
            transition: .8s;
        }

        .subtitle {
            margin-top: 10px;
        }

        img {
            border-radius: 10px;
        }
    }
}
</style>