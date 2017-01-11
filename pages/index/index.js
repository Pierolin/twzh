Page({
    data:{        
        text: 'init data',
        array: [{msg: '1'}, {msg: '2'}],
        letters:['AAA','BBB','CCC','DDD'],
        author:{name:'Piero',sex:'Male',age:'18'},
        view: 'MINAD',
        staffA:{firstName:'Piero',lastName:'Lin'},
        staffB:{firstName:'Youxu',lastName:'Lin'},
        staffC:{firstName:'Oreip',lastName:'Lin'},
        count:1,
        objectArray: [
        {id: 5, unique: 'unique_5'},
        {id: 4, unique: 'unique_4'},
        {id: 3, unique: 'unique_3'},
        {id: 2, unique: 'unique_2'},
        {id: 1, unique: 'unique_1'},
        {id: 0, unique: 'unique_0'},
        ],
        numberArray: [1, 2, 3, 4]
    },
    onLoad:function(){
    },
    onReady:function(){

    },
    onShow:function(){

    },
    onHide:function(){

    },
    onUnLoad:function(){

    },
    onPullDownRefresh:function(){

    },
    onReachBottom:function(){

    },
    // Event Handler
    viewTap:function(){
        this.setData({
            text: 'Some data for updating view.'
        })
    },
    add:function(e){
        this.setData({
            count:this.data.count + 1
        })
    },
    customData:{
        hi: 'MINA'
    },
    switch: function(e) {
        const length = this.data.objectArray.length
        for (let i = 0; i < length; ++i) {
        const x = Math.floor(Math.random() * length)
        const y = Math.floor(Math.random() * length)
        const temp = this.data.objectArray[x]
        this.data.objectArray[x] = this.data.objectArray[y]
        this.data.objectArray[y] = temp
        }
        this.setData({
        objectArray: this.data.objectArray
        })
    },
    addToFront: function(e) {
        const length = this.data.objectArray.length
        var oArr = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
        this.setData({
        objectArray: oArr
        })
    },
    addNumberToFront: function(e){
        var newNumberArray = [ this.data.numberArray.length + 12].concat(this.data.numberArray)
        this.setData({
        numberArray:newNumberArray
        })
    },

    tapName: function(e){
        console.log(e.hi);
    },

    printLog:function(e){
        console.log(e);
    }

})