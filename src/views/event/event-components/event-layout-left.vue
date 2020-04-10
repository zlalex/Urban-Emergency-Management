<template>
    <index-section class="event-left-section">
        <template #title>
            <h2 class="ue-align-center">事件信息</h2>
        </template>

        <index-echarts-tpl>
            <p>
                <span class="font-gold">接报时间：</span>
                <span>2020年3月2日10:24</span>
            </p>
            <p>
                <span class="font-gold">事件类型：</span>
                <span>危险化学品事件</span>
            </p>
            <p>
                <span class="font-gold">持续时间：</span>
                <span class="font-red font-bold">{{hour}}小时{{time}}分</span>
            </p>
            <p>
                <span class="font-gold">事件描述：</span>
                <span>2020年3月2日10时21分许接110报警，合庆地区周祝公路琥珀路口，发生罐式货车侧翻，现场发现天然气泄漏，未发现人员伤亡。</span>
            </p>
        </index-echarts-tpl>

        <index-echarts-tpl title="现场灾情">
            <div class="ue-flex">
                <span class="ue-button ue-btn-red ue-btn-default">扩散:10公里</span>
                <span class="ue-button ue-btn-blue ue-btn-default">疏散:350户</span>
                <span class="ue-button ue-btn-green ue-btn-default">救治:6人</span>
                <span class="ue-button ue-btn-gray ue-btn-default">伤亡:0人</span>
            </div>
        </index-echarts-tpl>
    </index-section>
</template>
<script>
export default {
    data() {
        return {
            count: 110
        };
    },
    mounted() {
        setInterval(() => {
            this.count++;
        }, 1e3);
    },
    computed: {
        hour() {
            return Math.floor(this.count / 60);
        },
        time() {
            return this.count % 60;
        }
    }
};
</script>
<style lang="stylus">
.ue-default-layout {
    .ue-flex {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 2px;

        .ue-button {
            padding: 0 5px;
            height: 28px;
            line-height: 26px;
        }
    }

    .font-red {
        font-size: 16px;
        color: red;
    }

    .font-gold {
        color: gold;
    }

    .font-bold {
        font-weight: bold;
    }

    .ue-echarts-title {
        font-size: 14px;
    }

    .ue-event {
        p {
            text-align: left;
        }

        .ue-echarts-title {
            font-weight: 700;
            margin-bottom: 5px;
        }

        .ue-echarts-tpl {
            position: relative;
            padding: 5px 0;
            margin-bottom: 10px;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: -6px;
                width: 25px;
                height: 25px;
                border-left: 2px solid rgba(119, 200, 241, 0.65);
                border-top: 2px solid rgba(119, 200, 241, 0.65);
            }

            &::before {
                content: '';
                position: absolute;
                bottom: 0;
                right: -6px;
                width: 25px;
                height: 25px;
                border-right: 2px solid rgba(119, 200, 241, 0.65);
                border-bottom: 2px solid rgba(119, 200, 241, 0.65);
            }

            &:nth-child(2n) {
                &::after {
                    content: '';
                    left: inherit;
                    right: -6px;
                    border-bottom: 0 none;
                    border-left: 0 none;
                    border-right: 2px solid rgba(119, 200, 241, 0.65);
                    border-top: 2px solid rgba(119, 200, 241, 0.65);
                }

                &::before {
                    content: '';
                    right: inherit;
                    left: -6px;
                    border-top: 0 none;
                    border-right: 0 none;
                    border-left: 2px solid rgba(119, 200, 241, 0.65);
                    border-bottom: 2px solid rgba(119, 200, 241, 0.65);
                }
            }
        }
    }
}
</style>
