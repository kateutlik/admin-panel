'use strict';

/**
 * @ngdoc function
 * @name feedbackFormApp.controller:FeedbackFormCtrl
 * @description
 * # FeedbackFormCtrl
 * Controller of the feedbackFormApp
 */
(function() {

  var app = angular.module('adminPanelBublik');

  app.controller('FeedbackFormCtrl', function() {
    this.content = formContent;
    this.config = formConfig;

    this.showFeedbackForm = false;

    this.showForm = function() {
      this.showFeedbackForm = !this.showFeedbackForm;
    };
  });
  var formConfig = {
    minAge: 18
  };

  var formContent = {
    title: 'Feedback Form',
    showButtonText: 'Please let us know what you think about us',
    submitButtonText: 'Send us your feedback',
    feedbackEmailLabel: 'What\'s your e-mail address?',
    feedbackEmailPlaceholder: 'Enter email',
    feedbackAgeLabel: 'How old are you?',
    feedbackAgePlaceholder: 'Enter your age',
    feedbackCommentLabel: 'Leave your comment, please.',
    feedbackCommentPlaceholder: 'Enter comment',
    errorMessageEmailRequired: 'Tell us your email, please.',
    errorMessageEmailsFormat: 'This is not a valid email.',
    errorMessageAgeRequired: 'Tell us your age, please.',
    errorMessageAgeMin: 'This is not a valid age. Min value is '+ formConfig.minAge,
    errorMessageAgeFormat: 'This is not a valid number format.',
    errorMessageCommentRequired: 'Tell us your comment, please.'
  };



})();