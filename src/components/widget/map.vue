<template>
    <div class="ue-map-wrap">
        <div id="container"></div>
		<button class="ue-abs"
			style="z-index:2; top: 10px; left: 10px; padding: 2px 4px;"
			@click="carMovePath">重放</button>
    </div>
</template>
<script>
export default {
    name: 'ue-map',
    data() {
        return {
            map: null
        };
    },

    props: {
        position: {
            type: Object,
            default: () => ({})
        },
        start: {
            type: Object,
            default: () => ({})
        },
        end: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        positionX() {
            return this.position.x;
        },
        positionY() {
            return this.position.y;
        },
        startX() {
            return this.start.x;
        },
        StartY() {
            return this.start.y;
        },
        endX() {
            return this.end.x;
        },
        endY() {
            return this.end.y;
        }
    },

    methods: {
        renderMap() {
            const BMap = this.BMap;
            const map = this.map;
            const shanghaiX = this.positionX || 31.40527;
            const shanghaiY = this.positionY || 121.48941;

            // 定位中心
            map.centerAndZoom(new BMap.Point(shanghaiY, shanghaiX), 15);
			this.carMovePath()
		},

		carMovePath(){
            const BMap = this.BMap;
            const map = this.map;

            const xuhuiX = this.startX || 31.22352;
            const xuhuiY = this.StartY || 121.45591;
            const jinganX = this.endX || 31.18826;
            const jinganY = this.endY || 121.43687;

            const myP1 = new BMap.Point(xuhuiY, xuhuiX); //起点
            const myP2 = new BMap.Point(jinganY, jinganX); //终点
            const myIcon = new BMap.Icon(
                './img/img-car.png',
                new BMap.Size(50, 50),
                {
                    //小车图片
                    imageOffset: new BMap.Size(0, 10) //图片的偏移量。为了是图片底部中心对准坐标点。
                }
			);

            const driving2 = new BMap.DrivingRoute(map, {
                renderOptions: { map: map, autoViewport: true }
            }); //驾车实例

            driving2.search(myP1, myP2); //显示一条公交线路
            const run = function() {
                const driving = new BMap.DrivingRoute(map); //驾车实例
                driving.search(myP1, myP2);
                driving.setSearchCompleteCallback(function() {
                    const pts = driving
                        .getResults()
                        .getPlan(0)
                        .getRoute(0)
						.getPath(); //通过驾车实例，获得一系列点的数组

                    const paths = pts.length; //获得有几个点
                    const carMk = new BMap.Marker(pts[0], { icon: myIcon });
                    map.addOverlay(carMk);

                    function resetMkPoint(i) {
                        carMk.setPosition(pts[i]);
                        if (i < paths) {
                            setTimeout(function() {
                                i++;
                                resetMkPoint(i);
                            }, 100);
                        }
                    }

                    setTimeout(function() {
                        resetMkPoint(5);
                    }, 100);
                });
            };

            setTimeout(function() {
                run();
            }, 1500);
		}
    },

    mounted() {
        const BMap = window.BMap;
        const map = new BMap.Map('container');
        this.BMap = BMap;
        this.map = map;
        // 鼠标滚动缩放
        this.map.enableScrollWheelZoom(true);

        this.renderMap();
    }
};
</script>