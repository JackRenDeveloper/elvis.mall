webpackJsonp([31],{YNjd:function(t,e){},eQZv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("mRsl"),i={name:"productCateList",data:function(){return{list:null,total:null,listLoading:!0,listQuery:{pageNum:1,pageSize:5},parentId:0}},created:function(){this.resetParentId(),this.getList()},watch:{$route:function(t){this.resetParentId(),this.getList()}},methods:{resetParentId:function(){null!=this.$route.query.parentId?this.parentId=this.$route.query.parentId:this.parentId=0},handleAddProductCate:function(){this.$router.push("/pms/addProductCate")},getList:function(){var t=this;this.listLoading=!0,Object(a.c)(this.parentId,this.listQuery).then(function(e){t.listLoading=!1,t.list=e.data.list,t.total=e.data.total})},handleSizeChange:function(t){this.listQuery.pageNum=1,this.listQuery.pageSize=t,this.getList()},handleCurrentChange:function(t){this.listQuery.pageNum=t,this.getList()},handleNavStatusChange:function(t,e){var n=this,i=new URLSearchParams,s=[];s.push(e.id),i.append("ids",s),i.append("navStatus",e.navStatus),Object(a.f)(i).then(function(t){n.$message({message:"修改成功",type:"success",duration:1e3})})},handleShowStatusChange:function(t,e){var n=this,i=new URLSearchParams,s=[];s.push(e.id),i.append("ids",s),i.append("showStatus",e.showStatus),Object(a.h)(i).then(function(t){n.$message({message:"修改成功",type:"success",duration:1e3})})},handleShowNextLevel:function(t,e){this.$router.push({path:"/pms/productCate",query:{parentId:e.id}})},handleTransferProduct:function(t,e){console.log("handleAddProductCate")},handleUpdate:function(t,e){this.$router.push({path:"/pms/updateProductCate",query:{id:e.id}})},handleDelete:function(t,e){var n=this;this.$confirm("是否要删除该品牌","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(a.b)(e.id).then(function(t){n.$message({message:"删除成功",type:"success",duration:1e3}),n.getList()})})}},filters:{levelFilter:function(t){return 0===t?"一级":1===t?"二级":void 0},disableNextLevel:function(t){return 0!==t}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-card",{staticClass:"operate-container",attrs:{shadow:"never"}},[n("i",{staticClass:"el-icon-tickets",staticStyle:{"margin-top":"5px"}}),t._v(" "),n("span",{staticStyle:{"margin-top":"5px"}},[t._v("数据列表")]),t._v(" "),n("el-button",{staticClass:"btn-add",attrs:{size:"mini"},on:{click:function(e){return t.handleAddProductCate()}}},[t._v("\n      添加\n    ")])],1),t._v(" "),n("div",{staticClass:"table-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],ref:"productCateTable",staticStyle:{width:"100%"},attrs:{data:t.list,border:""}},[n("el-table-column",{attrs:{label:"编号",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.id))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"分类名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.name))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"级别",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(t._f("levelFilter")(e.row.level)))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"商品数量",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productCount))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"数量单位",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.productUnit))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"导航栏",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleNavStatusChange(e.$index,e.row)}},model:{value:e.row.navStatus,callback:function(n){t.$set(e.row,"navStatus",n)},expression:"scope.row.navStatus"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"是否显示",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-switch",{attrs:{"active-value":1,"inactive-value":0},on:{change:function(n){return t.handleShowStatusChange(e.$index,e.row)}},model:{value:e.row.showStatus,callback:function(n){t.$set(e.row,"showStatus",n)},expression:"scope.row.showStatus"}})]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"排序",width:"100",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(t._s(e.row.sort))]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"设置",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini",disabled:t._f("disableNextLevel")(e.row.level)},on:{click:function(n){return t.handleShowNextLevel(e.$index,e.row)}}},[t._v("查看下级\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleTransferProduct(e.$index,e.row)}}},[t._v("转移商品\n          ")])]}}])}),t._v(" "),n("el-table-column",{attrs:{label:"操作",width:"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{size:"mini"},on:{click:function(n){return t.handleUpdate(e.$index,e.row)}}},[t._v("编辑\n          ")]),t._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return t.handleDelete(e.$index,e.row)}}},[t._v("删除\n          ")])]}}])})],1)],1),t._v(" "),n("div",{staticClass:"pagination-container"},[n("el-pagination",{attrs:{background:"",layout:"total, sizes,prev, pager, next,jumper","page-size":t.listQuery.pageSize,"page-sizes":[5,10,15],"current-page":t.listQuery.pageNum,total:t.total},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange,"update:currentPage":function(e){return t.$set(t.listQuery,"pageNum",e)},"update:current-page":function(e){return t.$set(t.listQuery,"pageNum",e)}}})],1)],1)},staticRenderFns:[]};var r=n("C7Lr")(i,s,!1,function(t){n("YNjd")},"data-v-499c5f01",null);e.default=r.exports}});
//# sourceMappingURL=31.d1274fc1dc6bd282109b.js.map