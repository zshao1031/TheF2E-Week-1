$(document).ready(function() {

	var slideTime = 200;
	
	//*****************************************************
	//按下主選單按鈕時的反應
	$('#myTasksBtn').click(function(event) {
		changeUsingPage('#myTasksBtn');
		$('.oneTask.taskBoxNotCompleted').slideDown(slideTime);
		$('.oneTask.taskBoxCompleted').slideDown(slideTime);
		$('.footer p').text('4 tasks left');		
	});

	$('#inProgressBtn').click(function(event) {
		changeUsingPage('#inProgressBtn');
		$('.oneTask.taskBoxNotCompleted').slideDown(slideTime);
		$('.oneTask.taskBoxCompleted').slideUp(slideTime);
		$('.footer p').text('4 tasks left');
	});

	$('#completedBtn').click(function(event) {
		changeUsingPage('#completedBtn');
		$('.oneTask.taskBoxNotCompleted').slideUp(slideTime);
		$('.oneTask.taskBoxCompleted').slideDown(slideTime);
		$('.footer p').text('1 task completed');
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
	$('#task1 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task1');});
	$('#task2 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task2');});
	$('#task3 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task3');});
	$('#task4 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task4');});
	$('#task5 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task5');});
	$('#task6 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task6');});
	$('#task7 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task7');});
	$('#task8 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task8');});
	$('#task9 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task9');});
	$('#task10 .taskPanel .completedSetting').click(function(event) {completedTheTask('#task10');});

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
	}

	//*****************************************************
	//按下「切換置頂」按鈕
	$('#addNewTask .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#addNewTask');});
	$('#task1 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task1');});
	$('#task2 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task2');});
	$('#task3 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task3');});
	$('#task4 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task4');});
	$('#task5 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task5');});
	$('#task6 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task6');});
	$('#task7 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task7');});
	$('#task8 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task8');});
	$('#task9 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task9');});
	$('#task10 .taskPanel .stickySetting').click(function(event) {settingTaskSticky('#task10');});

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
	$('#task1 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task1');});
	$('#task2 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task2');});
	$('#task3 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task3');});
	$('#task4 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task4');});
	$('#task5 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task5');});
	$('#task6 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task6');});
	$('#task7 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task7');});
	$('#task8 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task8');});
	$('#task9 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task9');});
	$('#task10 .taskPanel .editSetting').click(function(event) {settingTaskEdit('#task10');});

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
	$('#task1 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task1');});
	$('#task2 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task2');});
	$('#task3 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task3');});
	$('#task4 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task4');});
	$('#task5 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task5');});
	$('#task6 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task6');});
	$('#task7 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task7');});
	$('#task8 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task8');});
	$('#task9 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task9');});
	$('#task10 .taskEdit .taskEditButtonBox .cancelButton').click(function(event) {usingEditCancel('#task10');});

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
	$('#task1 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task1');});
	$('#task2 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task2');});
	$('#task3 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task3');});
	$('#task4 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task4');});
	$('#task5 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task5');});
	$('#task6 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task6');});
	$('#task7 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task7');});
	$('#task8 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task8');});
	$('#task9 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task9');});
	$('#task10 .taskEdit .taskEditButtonBox .saveButton').click(function(event) {usingEditSave('#task10');});


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
