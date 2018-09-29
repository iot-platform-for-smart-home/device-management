// var userLevel;
// var tenant;
// var userId;
$(document).ready(function () {

    /*中英文切换*/
    var lang_flag=getCookie('Language');

    if(lang_flag==1){
        document.getElementById("ruleInfoTitle").innerText="规则信息";
        document.getElementById("curRuleName").innerText="规则名称：";
        document.getElementById("curRuleID").innerText="规则ID：";
        document.getElementById("curRuleStatus").innerText="状态：";
        document.getElementById("curRuleDescription").innerText="规则描述：";
        document.getElementById("curRuleDetail").innerText="规则详情";
        document.getElementById("filterDetail").innerText="过滤器详情";
        document.getElementById("filterName").innerText="过滤器名称：";
        document.getElementById("filterType").innerText="过滤器类型：";
        document.getElementById("filterCode").innerText="JS代码：";
        document.getElementById("rulePluginDetail").innerText="插件详情";
        document.getElementById("rulePluginRuleName").innerText="规则名称：";
        document.getElementById("rulePluginJumpAddress").innerText="跳转地址：";
        document.getElementById("rulePluginRequestMethod").innerText="请求方法：";
        document.getElementById("rulePluginRequestAddress").innerText="请求地址：";
        document.getElementById("rulePluginRecipient").innerText="收件人：";
        document.getElementById("rulePluginTransaction").innerText="事务：";
        document.getElementById("rulePluginContent").innerText="内容：";
        document.getElementById("rulePluginNews").innerText="消息：";
        document.getElementById("rulePluginNewsType").innerText="消息类型：";
        document.getElementById("deleteRule").innerText="删除规则";
        document.getElementById("deleteRuleConfirm").innerText="确定删除此规则？";
        document.getElementById("modalDeleteRuleClose").innerText="关闭";
        document.getElementById("modalDeleteRuleConfirm").innerText="确定";
        document.getElementById("activateRule").innerText="激活规则";
        document.getElementById("activateRuleConfirm").innerText="确定激活此规则？";
        document.getElementById("modalActivateRuleClose").innerText="关闭";
        document.getElementById("modalActivateRuleConfirm").innerText="确定";
        document.getElementById("pauseRule").innerText="暂停规则";
        document.getElementById("pauseRuleConfirm").innerText="确定停止运行此规则？";
        document.getElementById("modalPauseRuleClose").innerText="关闭";
        document.getElementById("modalPauseRuleConfirm").innerText="确定";
        document.getElementById("ruleManagementTitle").innerText="规则管理";
        document.getElementById("createRule").innerText="+ 创建规则";
        document.getElementById("searchRuleText").setAttribute("placeholder","请输入规则名称...");
        document.getElementById("newRule").innerText="添加规则";
        document.getElementById("newRuleName").innerText="规则名称：";
        document.getElementById("ruleName").setAttribute("placeholder","请输入规则名称");
        document.getElementById("rulenamealert").innerText="请输入规则名称";
        document.getElementById("newRuleDescription").innerText="描       述：";
        document.getElementById("newDescription").setAttribute("placeholder","请添加对规则的描述...");
        document.getElementById("newFilter").innerText="添加过滤器";
        document.getElementById("newFilterName").innerText="过滤器名称";
        document.getElementById("addFilter").innerText="+ 添加过滤器";
        document.getElementById("newRulePlugin").innerText="添加插件";
        document.getElementById("newRulePluginName").innerText="插件名称";
        document.getElementById("addRulePlugin").innerText="+ 添加插件";
        document.getElementById("modalAddRuleClose").innerText="关闭";
        document.getElementById("modalAddRuleConfirm").innerText="确定";
        document.getElementById("newFilterTitle").innerText="添加过滤器";
        document.getElementById("newRuleFilterName").innerText="过滤器名称：";
        document.getElementById("addfiltername").setAttribute("placeholder","请输入过滤器名称");
        document.getElementById("filternamealert").innerText="请输入过滤器名称";
        document.getElementById("newRuleFilterType").innerText="过滤器类型：";
        document.getElementById("addfiltertype").setAttribute("placeholder","待定");
        document.getElementById("newRuleFilterCode").innerText="JS 代 码：";
        document.getElementById("newRuleFilterClose").innerText="关闭";
        document.getElementById("newRuleFilterConfirm").innerText="确定";
        document.getElementById("newRulePluginTitle").innerText="添加插件";
        document.getElementById("newRulePluginRemind").innerText="获取插件中...请耐心等待";
        document.getElementById("newRulePluginDetailName").innerText="名  称：";
        document.getElementById("newRulePluginSelect").innerText="--请选择插件--";
        document.getElementById("newRulePluginDetailDes").innerText="描  述：";
        document.getElementById("newRulePluginDetailAddr").innerText="跳转地址：";
        document.getElementById("newRulePluginDetailReq").innerText="请求方式：";
        document.getElementById("newRulePluginDetailRestReq").innerText="请求方式：";
        document.getElementById("newRulePluginReqSelect").innerText="--请选择请求方式--";
        document.getElementById("newRulePluginReqAddr").innerText="请求地址：";
        document.getElementById("newRulePluginRecipient").innerText="收件人";
        document.getElementById("newRulePluginMailTheme").innerText="邮件主题：";
        document.getElementById("newRulePluginMailContent").innerText="邮件内容：";
        document.getElementById("modalNewRulePluginClose").innerText="关闭";
        document.getElementById("modalNewRulePluginConfirm").innerText="确定";
        document.getElementById("addTranMailSub").setAttribute("placeholder","请输入邮件主题");
    }
    else{
        document.getElementById("ruleInfoTitle").innerText="Rule Information";
        document.getElementById("curRuleName").innerText="Rule Name：";
        document.getElementById("curRuleID").innerText="Rule ID：";
        document.getElementById("curRuleStatus").innerText="Status：";
        document.getElementById("curRuleDescription").innerText="Rule Description：";
        document.getElementById("curRuleDetail").innerText="Rule Detail";
        document.getElementById("filterDetail").innerText="Filter Detail";
        document.getElementById("filterName").innerText="Filter Name：";
        document.getElementById("filterType").innerText="Filter Type：";
        document.getElementById("filterCode").innerText="JS Code：";
        document.getElementById("rulePluginDetail").innerText="Plugin Detail";
        document.getElementById("rulePluginRuleName").innerText="Rule Name：";
        document.getElementById("rulePluginJumpAddress").innerText="Jump Address：";
        document.getElementById("rulePluginRequestMethod").innerText="Request Method：";
        document.getElementById("rulePluginRequestAddress").innerText="Request Address：";
        document.getElementById("rulePluginRecipient").innerText="Recipient：";
        document.getElementById("rulePluginTransaction").innerText="Transaction：";
        document.getElementById("rulePluginContent").innerText="Content：";
        document.getElementById("rulePluginNews").innerText="Message：";
        document.getElementById("rulePluginNewsType").innerText="Message Type：";
        document.getElementById("deleteRule").innerText="Delete Rule";
        document.getElementById("deleteRuleConfirm").innerText="Are you sure to delete this rule?";
        document.getElementById("modalDeleteRuleClose").innerText="Close";
        document.getElementById("modalDeleteRuleConfirm").innerText="Yes";
        document.getElementById("activateRule").innerText="Activate Rule";
        document.getElementById("activateRuleConfirm").innerText="Are you sure to activate this rule?";
        document.getElementById("modalActivateRuleClose").innerText="Close";
        document.getElementById("modalActivateRuleConfirm").innerText="Yes";
        document.getElementById("pauseRule").innerText="Stop Rule";
        document.getElementById("pauseRuleConfirm").innerText="Are you sure to stop this rule?";
        document.getElementById("modalPauseRuleClose").innerText="Close";
        document.getElementById("modalPauseRuleConfirm").innerText="Yes";
        document.getElementById("ruleManagementTitle").innerText="Rule Management";
        document.getElementById("createRule").innerText="+ Add Rule";
        document.getElementById("newRule").innerText="Add Rule";
        document.getElementById("newRuleName").innerText="Rule Name：";
        document.getElementById("rulenamealert").innerText="Please input the name of rule";
        document.getElementById("newRuleDescription").innerText="Description：";
        document.getElementById("newFilter").innerText="Add Filter";
        document.getElementById("newFilterName").innerText="Filter Name";
        document.getElementById("addFilter").innerText="+ Add Filter";
        document.getElementById("newRulePlugin").innerText="Add Plugin";
        document.getElementById("newRulePluginName").innerText="Plugin Name";
        document.getElementById("addRulePlugin").innerText="+ Add Plugin";
        document.getElementById("modalAddRuleClose").innerText="Close";
        document.getElementById("modalAddRuleConfirm").innerText="Yes";
        document.getElementById("newFilterTitle").innerText="Add Filter";
        document.getElementById("newRuleFilterName").innerText="Filter Name：";
        document.getElementById("filternamealert").innerText="Please input the name of filter";
        document.getElementById("newRuleFilterType").innerText="Filter Type：";
        document.getElementById("newRuleFilterCode").innerText="JS Code：";
        document.getElementById("newRuleFilterClose").innerText="Close";
        document.getElementById("newRuleFilterConfirm").innerText="Yes";
        document.getElementById("newRulePluginTitle").innerText="Add Plugin";
        document.getElementById("newRulePluginRemind").innerText="Get the plugin...please be patient";
        document.getElementById("newRulePluginDetailName").innerText="Name：";
        document.getElementById("newRulePluginSelect").innerText="--Please select a plugin--";
        document.getElementById("newRulePluginDetailDes").innerText="Description：";
        document.getElementById("newRulePluginDetailAddr").innerText="Jump Address：";
        document.getElementById("newRulePluginDetailReq").innerText="Request Method：";
        document.getElementById("newRulePluginDetailRestReq").innerText="Request Method：";
        document.getElementById("newRulePluginReqSelect").innerText="--Please select a request method--";
        document.getElementById("newRulePluginReqAddr").innerText="Request Address：";
        document.getElementById("newRulePluginRecipient").innerText="Recipient";
        document.getElementById("newRulePluginMailTheme").innerText="Email Subject：";
        document.getElementById("newRulePluginMailContent").innerText="Email Content：";
        document.getElementById("modalNewRulePluginClose").innerText="Close";
        document.getElementById("modalNewRulePluginConfirm").innerText="Yes";
        document.getElementById("searchRuleText").setAttribute("placeholder","Please input the name of rule...");
        document.getElementById("ruleName").setAttribute("placeholder","Please input the name of rule");
        document.getElementById("newDescription").setAttribute("placeholder","Please add the description of the rule...");
        document.getElementById("addfiltername").setAttribute("placeholder","Please input the name of filter");
        document.getElementById("addfiltertype").setAttribute("placeholder","To be determined");
        document.getElementById("addTranMailSub").setAttribute("placeholder","Please input the subject of the email");
    }
});

function getCookie(Name) {
    var search = Name + "="
    if(document.cookie.length > 0)
    {
        offset = document.cookie.indexOf(search)
        if(offset != -1)
        {
            offset += search.length
            end = document.cookie.indexOf(";", offset)
            if(end == -1)
                end = document.cookie.length
            return unescape(document.cookie.substring(offset, end))
        }
        else return ""
    }
}