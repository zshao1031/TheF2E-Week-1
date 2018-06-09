$(document).ready(function() {

	var slideTime = 200;
	var notCompletedTaskNum = 4;
	var completedTaskNum = 1;
	var thisTaskID;

	//*****************************************************
	//按下主選單按鈕時的反應
	$('#myTasksBtn').click(function(event) {
		changeUsingPage('#myTasksBtn');
		renewTaskShow();
		renewTaskNum();
	});

	$('#inProgressBtn').click(function(event) {
		changeUsingPage('#inProgressBtn');
		renewTaskShow();
		renewTaskNum();
	});

	$('#completedBtn').click(function(event) {
		changeUsingPage('#completedBtn');
		renewTaskShow();
		renewTaskNum();
	});
	
	//切頁時，主選單按紐樣式改變用
	function changeUsingPage(usingPage) {
		$('#myTasksBtn').removeClass('usingPage');
		$('#myTasksBtn').addClass('doesNotUsingPage');
		$('#inProgressBtn').removeClass('usingPage');
		$('#inProgressBtn').addClass('doesNotUsingPage');
		$('#completedBtn').removeClass('usingPage');
		$('#completedBtn').addClass('doesNotUsingPage');

		$('.addTaskBtn').slideDown(slideTime);
		$('#addNewTask').slideUp(slideTime);

		$(usingPage).removeClass('doesNotUsingPage');
		$(usingPage).addClass('usingPage');	
	}

	//更新footer中顯示任務數量的數字
	function renewTaskNum(){
		if($('#completedBtn').is('.usingPage')){
			$('.footer p').text(completedTaskNum + ' task completed');
		} else {
			$('.footer p').text(notCompletedTaskNum + ' tasks left');
		}
	}

	function renewTaskShow(){
		if($('#myTasksBtn').is('.usingPage')){
			$('.oneTask.taskBoxNotCompleted').slideDown(slideTime);
			$('.oneTask.taskBoxCompleted').slideDown(slideTime);
		}
		if($('#inProgressBtn').is('.usingPage')){
			$('.oneTask.taskBoxNotCompleted').slideDown(slideTime);
			$('.oneTask.taskBoxCompleted').slideUp(slideTime);
		}
		if($('#completedBtn').is('.usingPage')){
			$('.oneTask.taskBoxNotCompleted').slideUp(slideTime);
			$('.oneTask.taskBoxCompleted').slideDown(slideTime);
		}
	}

	//*****************************************************
	//按下「新增任務按鈕」
	$('.addTaskBtn').click(function(event) {
		$('.addTaskBtn').slideUp(slideTime);
		$('#addNewTask').slideDown(slideTime);
	});
	
	//按下新增任務裡的「Cancel」按鈕
	$('#addNewTask .cancelButton').click(function(event) {
		$('.addTaskBtn').slideDown(slideTime);
		$('#addNewTask').slideUp(slideTime);
		cleaningTaskBox('#addNewTask');
	});

	//按下新增任務裡的「Add Task」按鈕
	$('#addNewTask .saveButton').click(function(event) {
		$('.addTaskBtn').slideDown(slideTime);
		$('#addNewTask').slideUp(slideTime);
		cleaningTaskBox('#addNewTask');
	});

	//將新增任務裡的欄位清空
	function cleaningTaskBox(thisTask) {
		$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').addClass('far');
		$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').removeClass('fas');
		$(thisTask).removeClass('taskBoxSticky');
		$(thisTask + ' .taskPanel .titleEdit').val('');
		$(thisTask + ' .taskEdit .deadLineText-Date').val('');
		$(thisTask + ' .taskEdit .deadLineText-Time').val('');
		$(thisTask + ' .taskEdit .commentTextarea').val('');
	}

	//*****************************************************
	
	
	//按下「完成任務按鈕」
	$('#taskList .completedSetting').click(function(event) {
		thisTaskID = "#" + $(this).parent().parent('li').attr('id');
		completedTheTask(thisTaskID);
	});
	

	//按下「完成任務按鈕」
	function completedTheTask(thisTask) {
		//讓任務格改變樣式
		$(thisTask).toggleClass('taskBoxCompleted');
		$(thisTask).toggleClass('taskBoxNotCompleted');
		//關閉置頂狀態，並切換為不可調整／可調整
		$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').toggleClass('stickySettingDisable');
		$(thisTask).removeClass('taskBoxSticky');
		$(thisTask +' .taskPanel .settingButtonBox .stickySetting').addClass('far');
		$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').removeClass('fas');
		//關閉編輯模式，並切換為不可調整／可調整
		$(thisTask + ' .taskPanel .settingButtonBox .editSetting').toggleClass('editSettingDisable');
		$(thisTask).removeClass('taskBoxEditing');
		$(thisTask + ' .taskPanel .settingButtonBox .editSetting').removeClass('openEditUI');
		$(thisTask +' .taskEdit').slideUp(slideTime);
		$(thisTask + ' .taskPanel .taskTitle').show();
		$(thisTask + ' .taskPanel .titleEdit').hide();
	
		if($(thisTask + ' .taskPanel .stickySetting').attr('disabled')){
			$(thisTask + ' .taskPanel .stickySetting').removeAttr('disabled');
		} else {
			$(thisTask + ' .taskPanel .stickySetting').attr('disabled', 'disabled');
		}

		if($(thisTask + ' .taskPanel .editSetting').attr('disabled')){
			$(thisTask + ' .taskPanel .editSetting').removeAttr('disabled');
		} else {
			$(thisTask + ' .taskPanel .editSetting').attr('disabled', 'disabled');
		}

		//更新任務完成or未完成數量計算
		if($(thisTask).is('.taskBoxCompleted')){
			completedTaskNum++;
			notCompletedTaskNum--;
		} else if($(thisTask).is('.taskBoxNotCompleted')){
			completedTaskNum--;
			notCompletedTaskNum++;
		}

		//更新任務完成or未完成數量顯示
		if($('#completedBtn').is('.usingPage')){
			$('.footer p').text(completedTaskNum + ' task completed');
		} else {
			$('.footer p').text(notCompletedTaskNum + ' tasks left');
		}

		//更新footer中顯示任務數量的數字
		renewTaskNum();

		//更新改變完成狀態的task隱藏或顯示
		renewTaskShow();
	}

	//*****************************************************
	//按下「切換置頂」按鈕
	$('#addNewTask .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#addNewTask');});
	$('#taskList .stickySetting').click(function(event) {
		thisTaskID = "#" + $(this).parent().parent().parent().parent('li').attr('id');
		settingTaskSticky(thisTaskID);
	});

	//按下「切換置頂」按鈕
	function settingTaskSticky(thisTask) {
		if($(thisTask + ' .taskPanel .stickySetting').attr('disabled')){
			//讓「切換編輯模式的按鈕」改變顏色
			$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').toggleClass('far');
			$(thisTask + ' .taskPanel .settingButtonBox .stickySetting').toggleClass('fas');
			//讓任務格樣式改變
			$(thisTask).toggleClass('taskBoxSticky');
			//****************
			//置頂功能目前沒做
			//****************
		}
	}

	//*****************************************************
	//按下「切換編輯介面」按鈕
	$('#taskList .editSetting').click(function(event) {
		thisTaskID = "#" + $(this).parent().parent().parent().parent('li').attr('id');
		settingTaskEdit(thisTaskID);
	});

	//按下「切換編輯介面」按鈕
	function settingTaskEdit(thisTask) {
		if($(thisTask + ' .taskPanel .editSetting').attr('disabled')){
			//開關編輯介面
			$(thisTask + ' .taskEdit').slideToggle(slideTime);
		
			//將task標題切換成可編輯／不可編輯模式
			$(thisTask + ' .taskPanel .taskTitle').toggle();		
			$(thisTask + ' .taskPanel .titleEdit').toggle();
			//幫任務欄加上／取消「編輯中class」，為了切換taskPanel在兩種狀態下的樣式
			$(thisTask).toggleClass('taskBoxEditing');
			//讓「切換編輯模式的按鈕」改變顏色用
			$(thisTask + ' .taskPanel .settingButtonBox .editSetting').toggleClass('openEditUI');
		}
	}

	//*****************************************************
	//按下編輯介面的「cancel」按鈕
	$('#taskList .cancelButton').click(function(event) {
		thisTaskID = "#" + $(this).parent().parent().parent('li').attr('id');
		usingEditCancel(thisTaskID);
	});

	//按下編輯介面的「cancel」按鈕
	function usingEditCancel(thisTask) {
		//關閉編輯介面、並顯示內容Icon
		$(thisTask + ' .taskEdit').slideUp(slideTime);		
		//幫任務欄移除「編輯中Class」取消編輯中樣式
		$(thisTask).removeClass('taskBoxEditing');
		$(thisTask + ' .taskPanel .settingButtonBox .editSetting').removeClass('openEditUI');
		//將task標題切換成不可編輯模式
		$(thisTask + ' .taskPanel .titleEdit').hide();
		$(thisTask + ' .taskPanel .taskTitle').show();
	}

	//*****************************************************
	//按下編輯介面的「save」按鈕
	$('#taskList .saveButton').click(function(event) {
		thisTaskID = "#" + $(this).parent().parent().parent('li').attr('id');
		usingEditCancel(thisTaskID);
	});

	//按下編輯介面的「save」按鈕
	function usingEditSave(thisTask) {
		//關閉編輯介面、並顯示內容Icon
		$(thisTask + ' .taskEdit').slideUp(slideTime);
		//幫任務欄移除「編輯中Class」取消編輯中樣式
		$(thisTask).removeClass('taskBoxEditing');
		$(thisTask + ' .taskPanel .settingButtonBox .editSetting').removeClass('openEditUI');
		//將task標題切換成不可編輯模式
		$(thisTask + ' .taskPanel .titleEdit').hide();
		$(thisTask + ' .taskPanel .taskTitle').show();
		//*********************
		//目前沒做更新資料的部分
		//*********************
	}
	
	//*****************************************************


});

