import Application from 'ember-nested-property-test-example/app';
import config from 'ember-nested-property-test-example/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
