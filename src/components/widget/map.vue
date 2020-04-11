<template>
    <div class="ue-map-wrap ue-abs" style="top: 0; left: 0;">
        <div id="container"></div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'ue-map',
    data() {
        return {
            map: null,
            titleData: {
                company: {
                    data: {
                        width: 200,
                        height: 100,
                        title: '上海华谊精细化工有限公司'
                    },
                    address: `
						法人：张五州
						员工：200人
						许可范围：
						乙酸乙酯,乙酸,邻苯二
					`
                },
                safe: {
                    data: {
                        width: 200,
                        height: 100,
                        title: '上海凯越化工有限公司'
                    },
                    address: `
						法人：刘文斌
						员工：340人
						许可范围：
						含易燃溶剂的合成
						树脂、油漆、辅助
						材料、涂料等制品
					`
                },
                cart: {
                    data: {
                        width: 200,
                        height: 100,
                        title: '上海中海物流公司 沪BG4517'
                    },
                    address: `
						驾驶人：王明玉
						13867539850
						押运人：李保国
						13987603854
						货物类型：
						易燃
						货物名称：
						液化天然气
					`
                }
            }
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
        },
        ...mapState(['indexBottomType'])
    },

    methods: {
        renderMap() {
            const BMap = this.BMap;
            const map = this.map;
            const shanghaiX = this.positionX || 31.18;
            const shanghaiY = this.positionY || 121.43;

            // 定位中心
            map.centerAndZoom(new BMap.Point(shanghaiY, shanghaiX), 12);
            map.setMapStyle({ style: 'dark' });
            // this.renderBusiness();
        },

        renderBusiness() {
            const BMap = this.BMap;
            for (let i = 0; i < 6; i++) {
                const x = 121.43 + Math.random() / 10;
                const y = 31.18 + Math.random() / 10;
                const point = new BMap.Point(x, y);
                this.addMarker(point, i === 2, i);
            }
        },

        renderCircle() {
            const BMap = this.BMap;
			const map = this.map;

			const point = new BMap.Point(121.43, 31.18);
            const marker = new BMap.Marker(point); // 创建标注
            map.addOverlay(marker);
            marker.enableDragging(); //marker可拖拽

            const circle = new BMap.Circle(point, 3000, {
                fillColor: '#548ab9',
                strokeWeight: 1,
                fillOpacity: 0.3,
                strokeOpacity: 0.3
            }); //设置覆盖物的参数，中心坐标，半径，颜色
            map.addOverlay(circle); //在地图上显示圆形覆盖物
        },

        addMarker(point, sign) {
            const BMap = this.BMap;
            const map = this.map;
            // 编写自定义函数,创建标注
            // 动态数据
            let icon = null;
            if (this.indexBottomType === 'cart') {
                icon = new BMap.Icon('/img/img-car.png', new BMap.Size(40, 40));
            }

            const marker = icon
                ? new BMap.Marker(point, { icon })
                : new BMap.Marker(point);

            const opts = this.titleData[this.indexBottomType];
            const infoWindow = new BMap.InfoWindow(opts.address, opts.data);

            map.addOverlay(marker);
            !icon && sign && marker.setAnimation(2);
            marker.addEventListener('click', function() {
                map.openInfoWindow(infoWindow, point);
            });
        },

        carMovePath() {
            const BMap = this.BMap;
            const map = this.map;

            this.map.clearOverlays();
            const xuhuiX = this.startX || 31.22352 + Math.random() / 100;
            const xuhuiY = this.StartY || 121.45591 + Math.random() / 100;
            const jinganX = this.endX || 31.18826 + Math.random() / 100;
            const jinganY = this.endY || 121.43687 + Math.random() / 100;

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
            }, 1e3);
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
        // 地图交互
        this.$BUS.$on('CAR_MOVE_START', () => {
            this.carMovePath();
        });

        this.$BUS.$on('CHANGE_MAP_POINT', () => {
            this.map.clearOverlays();
            this.renderBusiness();
        });

        this.$BUS.$on('INIT_EVENT', () => {
			debugger
			this.renderCircle();
        });
    }
};
</script>