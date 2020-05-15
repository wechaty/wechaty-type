#!/usr/bin/env ts-node

import {
  test,
}             from 'tstest'

import {
  isOfficialId,
}                               from '../src/'

test('integration testing', async (t) => {
  t.ok(isOfficialId, 'should tbw')
})
