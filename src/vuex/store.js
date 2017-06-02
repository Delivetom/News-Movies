/**
 * Created by Gatsby on 2017/5/26.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state={
  count:0,
  stars:0,
  pageName:'新闻',
  isLoading:false,
  newInfo:{
    newsType:['娱乐','体育','军事','美女','娱乐','美食','科技'],
    newsMsg:[
      {
        text:'韩国拟对朝鲜实行“军硬民软”双轨战略，南北关',
        date:'2017-05-20',
        readCount:100,
        img:'../../assets/images/junjian.jpg',
        type:'军事',
        content:'此前，韩国政府再次重申在强力反制朝鲜挑衅的同时，灵活放开韩朝民间交流的立场。韩国统一部发言人李德行22日表示，强有力地应对朝鲜挑衅的基本原则坚定不移，但鉴于韩朝关系长期僵持有其不可取的一面，韩方将在不损害国际社会一致对朝制裁大局的范围内灵活考虑开展韩朝民间交流，缓和半岛局势。他表示，坚持向朝鲜提供人道援助是韩国历届政府一贯坚持的方针。针对韩国新政府成立后，10多个对朝人道援助及社会文化交流团体陆续提出了访朝申请，韩国统一部或即将批准其中一些申请。政府还有可能通过世界粮食计划署（WFP）、世界卫生组织(WHO)等国际组织重新对朝提供援助。',
        author:'文天祥',
        like:300,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:1
      },
      {
        text:'外交家顾维钧遗孀去世 复旦女神走完112岁传奇人生',
        date:'2017-05-21',
        readCount:150,
        type:'社会',
        content:'她是复旦大学首批女学生，其两任丈夫杨光泩和顾维钧都是民国著名的外交家，而她本人在二战结束后，成为了联合国首批礼宾官，也是联合国的首批女外交官。严幼韵1905年9月出生，是复旦大学最早一批女学生之一，两任丈夫都是知名外交官。她本人在二战结束后，成为联合国首批礼宾官，也是联合国的首批女外交官，曾与许多政要往来。从复旦女神，到联合国官员，再到顾太太，她的朋友圈就是一部中国近现代史。如今，老太太麻将打得越来越少了，但每年大大小小的派对必不可少。每次见人，她仍然是当初沪上大家闺秀的做派：要穿精心剪裁的旗袍，描红妆，洒香水，拢好头发，踩上高跟鞋才肯出现。虽然已经110岁了，但对于很多人来说，严幼韵仍然是那个开着小车上学的“爱的福”',
        author:'白居易',
        like:200,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:2
      },
      {
        text:'NBA-詹皇超乔丹改多项历史 骑士连续三年进总决赛',
        date:'2017-05-22',
        readCount:80,
        type:'体育',
        content:'腾讯体育5月26日讯 NBA东部决赛继续进行，骑士在客场以135-102大胜凯尔特人，以4-1的大比分晋级总决赛，连续三年与勇士会师总决赛，135分创队史季后赛单场得分新纪录。勒布朗-詹姆斯拿到35分、8个篮板和8次助攻，个人季后赛生涯总得分达到5995分，超越迈克尔-乔丹升至历史第一；他在效力于热火和骑士时均4次打进总决赛，成为历史上第一位曾代表两支不同的球队4进总决赛的球员；他季后赛生涯对阵凯尔特人的胜场数达到21场，超越威尔特-张伯伦位列历史第一；此外，詹姆斯季后赛生涯三分球命中数达到319个，超越马努-吉诺比利升至历史第三位。',
        author:'杜甫',
        like:500,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:3
      },
      {
        text:'15岁少年被砍3刀，倒地后竟淡定玩手机！他也很无奈啊',
        date:'2017-05-23',
        readCount:180,
        type:'社会',
        author:'李白',
        like:100,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:4
      },
      {
        text:'我才是老大！特朗普一把推开黑山总理强势插队',
        date:'2017-05-24',
        readCount:230,
        type:'社会',
        content:'另据中国日报报道，北约峰会开幕前，29成员国领导人在布鲁塞尔参加了隆重的新址大楼启用和升旗仪式。自北约总部于1967年从巴黎迁入布鲁塞尔后，多次扩容已使该军事同盟组织旧址大楼超负荷运转。北约称该玻璃幕墙建筑体采用了先进的环保理念，可减少其碳足迹。据海外网了解北约新总部大楼落成较原定时间迟2年，旧大楼上世纪60年代建造，当时计划暂用，但最后使用了近半世纪。',
        author:'扬尘',
        like:250,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:5
      },
      {
        text:'“解冻民族资产”骗局：组织者被骗30余次仍深信',
        date:'2017-05-25',
        readCount:300,
        type:'体育',
        content:'年近七旬的天津张大爷被天上掉下的“馅饼”砸得团团转，至今未走出陷阱。他认为，是因为间谍的破坏，导致大会没开成，他才没拿到5万元慈善金。4月21日，张大爷所在的“慈善富民”微信群发布消息称，“最高民族资产解冻委员会”组织的“民族大业国际市场启动大会”将于4月25日在鸟巢召开，只需缴10元钱制作胸牌，就可在大会现场领取5万元慈善金，而且参会人员到北京，可报销路费，并安排一晚住宿。“通过审讯得知她原是大港油田的一名工人，2012年退休后，她曾在一家药企当讲解员和推销员，干了一段时间后，跳槽去了一家保健品公司做推销员，有一定的人脉基础。” 天津市公安局刑侦局一支队民警孙毅说。',
        author:'陈鑫',
        like:150,
        comment:[
          {
            name:'阳晨夕下1',
            commentDate:'2017-05-10',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:10,
          },
          {
            name:'阳晨夕下2',
            commentDate:'2017-05-11',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:20,
          },
          {
            name:'阳晨夕下3',
            commentDate:'2017-05-12',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:30,
          },
          {
            name:'阳晨夕下4',
            commentDate:'2017-05-13',
            commentText:'中国强大，为中国感到自豪...',
            otherLike:40,
          },
        ],
        id:6
      }
    ],
    carousel:['../../../static/images/fanwu.jpg','../../../static/images/junshi.jpg','../../../static/images/meinv.jpg','../../../static/images/qiche.jpg'],
  },
  movieInfo:{
    moviesType:['悬疑','恐怖','科幻','动作','动画','史诗','偶像'],
    carousel:['../../../static/images/1-1.jpg','../../../static/images/1-2.jpg','../../../static/images/1-3.jpg','../../../static/images/1-4.jpg'],
    movieList:['inTheaters','comingSoon','Top250'],
    movieListName:['正在热映','即将上映','豆瓣TOP250'],
    moviesList:{}
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
